import {
  STAGE_ANCESTRY,
  defaultAttributes,
  STEP_ANCESTRY_ABILITIES,
} from "./constants";

const modifyAbilityScore = (preview, ability, amount) => {
  return {
    ...preview,
    [ability]: preview[ability] + amount,
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
const combineAbilityPicker = (acc, choice) => {
  const withBoosts = Object.values(choice).reduce(
    (inner, ability) => modifyAbilityScore(inner, ability, 2),
    acc.preview
  );

  return { ...acc, preview: withBoosts };
};

const combine = (...processes) => {
  return (acc, choice) => {
    return processes.reduce((acc, process) => process(acc, choice), acc);
  };
};

const combineAncestry = (acc, choice) => {
  // Ability Boosts
  const withBoosts = choice.ability_boosts.reduce((inner, ability) => {
    if (typeof ability === "string") {
      return modifyAbilityScore(inner, ability, 2);
    }

    return inner;
  }, acc.preview);

  // Ability Flaw
  const withFlaw = modifyAbilityScore(withBoosts, choice.ability_flaw, -2);

  return { ...acc, preview: withFlaw };
};

const stepMap = {
  [STAGE_ANCESTRY]: combine(combineTraits, combineState, combineAncestry),
  [STEP_ANCESTRY_ABILITIES]: combine(combineAbilityPicker),
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
    { traits: [], preview: defaultAttributes }
  );
};
