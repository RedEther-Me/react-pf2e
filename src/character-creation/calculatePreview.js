import {
  defaultAttributes,
  STAGE_ANCESTRY,
  STEP_ANCESTRY_ABILITIES,
  STEP_HERITAGE,
  STEP_BACKGROUND,
  STEP_BACKGROUND_ABILITIES,
  STAGE_CLASS,
  STAGE_ABILITY_SCORES,
  STAGE_SKILLS,
} from "./constants";

import { SKILL_MAP } from "../data/skills";
import abilities from "../data/abilities";
import calcMod from "../utils/calcMod";

const { INTELLIGENCE } = abilities;

const modifyAbilityScore = (preview, ability, amount) => {
  const { value } = preview[ability];
  const total = value + amount;

  return {
    ...preview,
    [ability]: { value: total, mod: calcMod(total) },
  };
};

const combineTraits = (acc, choice) => ({
  ...acc,
  traits: [...acc.traits, ...(choice.traits || [])],
});

const combineState = (acc, choice) => ({
  ...acc,
  preview: { ...acc.preview, ...(choice.state || {}) },
});

const combineAbility = (acc, choice) => {
  const withBoosts = choice.ability_boosts.reduce((inner, ability) => {
    if (typeof ability === "string") {
      return modifyAbilityScore(inner, ability, 2);
    }

    return inner;
  }, acc.preview);

  return { ...acc, preview: withBoosts };
};

const combineAbilityPicker = (acc, choice) => {
  const withBoosts = Object.values(choice).reduce(
    (inner, ability) => modifyAbilityScore(inner, ability, 2),
    acc.preview
  );

  return { ...acc, preview: withBoosts };
};

const combineSkills = (acc, choice) => {
  const { skills } = choice;

  const updatedSkills = Object.entries(skills || {}).reduce(
    (inner, [skill, level]) => {
      if (skill === "free") {
        return { ...inner, free: inner.free + level };
      }

      const isTrained = skill in inner;
      const hasSubtype = SKILL_MAP[skill].hasSubtype;

      if (isTrained && !hasSubtype) {
        return { ...inner, free: inner.free + 1 };
      }

      return {
        ...inner,
        [skill]: level,
      };
    },
    acc.preview.skills || {}
  );

  return {
    ...acc,
    preview: {
      ...acc.preview,
      skills: updatedSkills,
    },
  };
};

const combineFeats = (acc, choice) => acc;

const combine = (...processes) => {
  return (acc, choice) => {
    return processes.reduce((acc, process) => process(acc, choice), acc);
  };
};

const combineAncestry = (acc, choice) => {
  // Ability Flaw
  const withFlaw = modifyAbilityScore(acc.preview, choice.ability_flaw, -2);

  return { ...acc, preview: withFlaw };
};

const combineIntSkills = (acc) => {
  const { [INTELLIGENCE]: intelligence } = acc.preview;
  const { mod: intMod } = intelligence;

  return {
    ...acc,
    preview: {
      ...acc.preview,
      skills: { ...acc.preview.skills, free: acc.preview.skills.free + intMod },
    },
  };
};

const stepMap = {
  [STAGE_ANCESTRY]: combine(
    combineTraits,
    combineState,
    combineAbility,
    combineAncestry
  ),
  [STEP_ANCESTRY_ABILITIES]: combine(combineAbilityPicker),
  [STEP_HERITAGE]: combine(combineState),
  [STEP_BACKGROUND]: combine(combineSkills, combineFeats),
  [STEP_BACKGROUND_ABILITIES]: combine(combineAbilityPicker),
  [STAGE_CLASS]: combine(combineAbility, combineSkills),
  [STAGE_ABILITY_SCORES]: combine(combineAbilityPicker),
  [STAGE_SKILLS]: combine(combineIntSkills, combineSkills),
};

export const calculateState = (order, choices) => {
  return order.reduce(
    (acc, step) => {
      const choice = choices[step];

      if (!choice) {
        return acc;
      }

      const lookup = stepMap[step];
      return lookup(acc, choice);
    },
    { traits: [], preview: { ...defaultAttributes, skills: { free: 0 } } }
  );
};
