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
  STEP_CLASS_SUB_SELECTION,
  STEP_CLASS_FEAT,
} from "./constants";

import { SKILL_MAP } from "../data/skills";
import abilities from "../data/abilities";
import calcMod from "../utils/calcMod";
import { REMOVE, ALTER, BONUS } from "../data/classes";
import { FEAT_MAP } from "../data/feats";

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

const combineFeats = (state, choice) => {
  const { feats } = choice;

  return Object.entries(feats || {}).reduce((inner, [feat, data]) => {
    if (feat === "free") {
      const {
        class: updateClass,
        skill: updateSkill,
        ancestry: updateAncestry,
        general: updateGeneral,
      } = data;

      const {
        class: classFree = 0,
        skill: skillFree = 0,
        ancestry: ancestryFree = 0,
        general: generalFree = 0,
      } = inner.preview.feats.free;

      const combined = {
        class: updateClass ?? classFree,
        skill: updateSkill ?? skillFree,
        ancestry: updateAncestry ?? ancestryFree,
        general: updateGeneral ?? generalFree,
      };

      const withFrees = Immutable.setIn(
        inner,
        ["preview", "feats", "free"],
        combined
      );

      return withFrees;
    }

    const lookup = typeof data === "string" ? FEAT_MAP[data] : data;

    const withFeat = Immutable.setIn(inner, ["preview", "feats", feat], lookup);
    const withActions = subCombineActions(withFeat, lookup);

    return withActions;
  }, state);
};

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
      combine(
        subCombineActions,
        subCombineFeats,
        combineOrder({
          predicate: (choice, state) => true,
          stageName: STAGE_CLASS,
          stepName: STEP_CLASS_FEAT,
        })
      ),
      inner
    );
  }, state);
};

export const combineOrder = ({
  predicate,
  stageName,
  stepName,
  enabled = false,
  visible = true,
}) => (state, choice) => {
  const toggle = predicate(choice, state);

  const stepIndex = state.stages[stageName].steps.findIndex(
    (step) => step.name === stepName
  );
  const { enabled: prevEnabled, visible: prevVisible } = state.stages[
    stageName
  ].steps[stepIndex];

  const withEnabled = Immutable.setIn(
    state,
    ["stages", stageName, "steps", stepIndex, "enabled"],
    toggle ? toggle && prevEnabled : enabled
  );
  const withVisible = Immutable.setIn(
    withEnabled,
    ["stages", stageName, "steps", stepIndex, "visible"],
    toggle ? visible : prevVisible
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

const combineBackgroundSkill = (state, choice) => {
  if ("pick_feats" in state.choices[STEP_BACKGROUND]) {
    const keys = Object.keys(choice.skills);
    const [skill] = keys;

    const [feat_wild] = state.choices[STEP_BACKGROUND].pick_feats;
    const featName = `${feat_wild}${skill}`;
    const feat = FEAT_MAP[featName];

    return combineFeats(state, { feats: { [featName]: feat } });
  }

  return state;
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
      predicate: (choice) => "pick_skill" in choice,
      stageName: STAGE_ANCESTRY,
      stepName: STEP_BACKGROUND_SKILL,
    })
  ),
  [STEP_BACKGROUND_SKILL]: combine(combineSkills, combineBackgroundSkill),
  [STEP_BACKGROUND_ABILITIES]: combine(combineAbilityPicker),
  [STEP_CLASS_SELECTION]: combine(
    combineAbility,
    combineSkills,
    combineOrder({
      predicate: (choice) => "subclasses" in choice,
      stageName: STAGE_CLASS,
      stepName: STEP_CLASS_SUB_SELECTION,
      visible: false,
      enabled: true,
    }),
    combineClass,
    combineFeatures
  ),
  [STEP_CLASS_SUB_SELECTION]: combine(combineSubClass, combineFeatures),
  [STEP_CLASS_FEAT]: combine(combineFeats),
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
