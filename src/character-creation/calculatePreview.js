import {
  defaultAttributes,
  STEP_SELECT_ANCESTRY,
  STEP_ANCESTRY_ABILITIES,
  STEP_HERITAGE,
  STEP_BACKGROUND,
  STEP_BACKGROUND_SKILL,
  STEP_BACKGROUND_ABILITIES,
  STEP_CLASS_SELECTION,
  STAGE_ABILITY_SCORES,
  STAGE_SKILLS,
  STAGE_ANCESTRY,
  STAGE_CLASS,
  STEP_CLASS_SUB_SELECTIOIN,
} from "./constants";

import { SKILL_MAP } from "../data/skills";
import abilities from "../data/abilities";
import calcMod from "../utils/calcMod";
import { REMOVE, ALTER, BONUS } from "../data/classes";

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

const subCombineFeats = (state, feature) => {
  if ("feat" in feature) {
    const { type } = feature.feat;
    const prev = state.preview.feats.free[type] || 0;
    return Immutable.setIn(state, ["preview", "feats", "free", type], prev + 1);
  }

  return state;
};

const subCombineActions = (state, feature) => {
  if ("actions" in feature) {
    return Object.entries(feature.actions).reduce(
      (inner, [key, value]) =>
        Immutable.setIn(inner, ["preview", "actions", key], value),
      state
    );
  }
  return state;
};

const combineFeatures = (state) => {
  const levelArray = [...Array(state.preview.level).keys()].map((i) => i + 1);
  return levelArray.reduce((inner, level) => {
    const levelFeatures = inner.preview.featureMap[level];

    return levelFeatures.reduce(
      combine(subCombineActions, subCombineFeats),
      inner
    );
  }, state);
};

const combineOrder = ({
  field,
  stageName,
  stepName,
  enabled = true,
  visible = true,
}) => (state, choice) => {
  const isVisible = field in choice;

  const stepIndex = state.stages[stageName].steps.findIndex(
    (step) => step.name === stepName
  );
  const withEnabled = Immutable.setIn(
    state,
    ["stages", stageName, "steps", stepIndex, "enabled"],
    isVisible && enabled
  );
  const withVisible = Immutable.setIn(
    withEnabled,
    ["stages", stageName, "steps", stepIndex, "visible"],
    isVisible && visible
  );

  return withVisible;
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

const combineClass = (state, choice) => {
  const withFeatureMap = Immutable.setIn(
    state,
    ["preview", "featureMap"],
    choice.featureMap
  );

  return withFeatureMap;
};

const combineSubClass = (state, choice) => {
  const withAlternateFeatures = (choice.alts || []).reduce((inner, alt) => {
    const { level, type, action, ...rest } = alt;
    switch (action) {
      case REMOVE: {
        const updated = inner.preview.featureMap[level].filter(
          (f) => f.name !== type
        );
        return Immutable.setIn(
          inner,
          ["preview", "featureMap", level],
          updated
        );
      }
      case ALTER: {
        const featureIndex = inner.preview.featureMap[level].findIndex(
          (f) => f.name === type
        );
        const feature = inner.preview.featureMap[level][featureIndex];
        return Immutable.setIn(
          inner,
          ["preview", "featureMap", level, featureIndex],
          {
            ...feature,
            ...rest,
          }
        );
      }
      case BONUS: {
        return inner;
      }
      default: {
        return inner;
      }
    }
  }, state);

  return withAlternateFeatures;
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
  [STEP_CLASS_SELECTION]: combine(
    combineAbility,
    combineSkills,
    combineOrder({
      field: "subclasses",
      stageName: STAGE_CLASS,
      stepName: STEP_CLASS_SUB_SELECTIOIN,
      visible: false,
    }),
    combineClass,
    combineFeatures
  ),
  [STEP_CLASS_SUB_SELECTIOIN]: combine(combineSubClass, combineFeatures),
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
