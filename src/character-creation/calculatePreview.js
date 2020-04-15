import {
  defaultAttributes,
  STEP_SELECT_ANCESTRY,
  STEP_ANCESTRY_ABILITIES,
  STEP_HERITAGE,
  STEP_BACKGROUND,
  STEP_BACKGROUND_SKILL,
  STEP_BACKGROUND_ABILITIES,
  STAGE_CLASS,
  STAGE_ABILITY_SCORES,
  STAGE_SKILLS,
  STAGE_ANCESTRY,
} from "./constants";

import { SKILL_MAP } from "../data/skills";
import abilities from "../data/abilities";
import calcMod from "../utils/calcMod";

const Immutable = require("seamless-immutable").static;

const { INTELLIGENCE } = abilities;

const modifyAbilityScore = (state, ability, amount) => {
  const { value } = state.preview[ability];
  const total = value + amount;

  return Immutable.setIn(state, ["preview", ability], {
    value: total,
    mod: calcMod(total),
  });
};

const combineTraits = (state, choice) => state;
// Immutable.merge(state, { traits: choice.traits || [] });

const combineState = (state, choice) => {
  return Immutable.merge(
    state,
    { preview: choice.state || {} },
    { deep: true }
  );
};

const combineAbility = (state, choice) => {
  return choice.ability_boosts.reduce((inner, ability) => {
    if (typeof ability === "string") {
      return modifyAbilityScore(inner, ability, 2);
    }

    return inner;
  }, state);
};

const combineAbilityPicker = (state, choice) => {
  return Object.values(choice).reduce(
    (inner, ability) => modifyAbilityScore(inner, ability, 2),
    state
  );
};

const combineSkills = (state, choice) => {
  const { skills } = choice;

  return Object.entries(skills || {}).reduce((inner, [skill, level]) => {
    const { skills: currentSkills } = inner.preview;

    if (skill === "free") {
      return Immutable.setIn(
        inner,
        ["preview", "skills", "free"],
        currentSkills.free + level
      );
    }

    const isTrained = skill in inner;
    const hasSubtype = SKILL_MAP[skill].hasSubtype;

    if (isTrained && !hasSubtype) {
      return Immutable.setIn(
        inner,
        ["preview", "skills", "free"],
        currentSkills.free + 1
      );
    }

    return Immutable.setIn(inner, ["preview", "skills", skill], level);
  }, state);
};

const combineFeats = (acc, choice) => acc;

const combineOrder = ({ field, stageName, stepName }) => (state, choice) => {
  const isVisible = field in choice;

  const stepIndex = state.stages[stageName].steps.findIndex(
    (step) => step.name === stepName
  );
  const updateState = Immutable.setIn(
    state,
    ["stages", stageName, "steps", stepIndex, "visible"],
    isVisible
  );

  return updateState;
};

const combine = (...processes) => {
  return (state, choice) => {
    return processes.reduce((inner, process) => process(inner, choice), state);
  };
};

const combineAncestry = (state, choice) => {
  // Ability Flaw
  const withFlaw = modifyAbilityScore(state, choice.ability_flaw, -2);

  return withFlaw;
};

const combineIntSkills = (state) => {
  const { [INTELLIGENCE]: intelligence } = state.preview;
  const { mod: intMod } = intelligence;

  return Immutable.setIn(
    state,
    ["preview", "skills", "free"],
    state.preview.skills.free + intMod
  );
};

const stepMap = {
  [STEP_SELECT_ANCESTRY]: combine(
    combineTraits,
    combineState,
    combineAbility,
    combineAncestry
  ),
  [STEP_ANCESTRY_ABILITIES]: combine(combineAbilityPicker),
  [STEP_HERITAGE]: combine(combineState),
  [STEP_BACKGROUND]: combine(
    combineSkills,
    combineFeats,
    combineOrder({
      field: "pick_skill",
      stageName: STAGE_ANCESTRY,
      stepName: STEP_BACKGROUND_SKILL,
    })
  ),
  [STEP_BACKGROUND_SKILL]: combine(combineSkills),
  [STEP_BACKGROUND_ABILITIES]: combine(combineAbilityPicker),
  [STAGE_CLASS]: combine(combineAbility, combineSkills),
  [STAGE_ABILITY_SCORES]: combine(combineAbilityPicker, combineIntSkills),
  [STAGE_SKILLS]: combine(combineSkills),
};

export const calculateState = (state) => {
  const { stages, choices } = state;

  const order = Object.values(stages)
    .reduce((acc, stage) => [...acc, ...stage.steps], [])
    .filter((step) => step.enabled)
    .map((step) => step.name);

  return order.reduce((acc, step) => {
    const choice = choices[step];

    if (!choice) {
      return acc;
    }

    const lookup = stepMap[step];

    return lookup(acc, choice);
  }, Immutable.set(state, "preview", defaultAttributes));
};
