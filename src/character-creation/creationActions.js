export const SWITCH_ANCESTRY = "SWITCH_ANCESTRY";

export const switchAncestry = ({ type, ancestry }) => {
  return {
    type: SWITCH_ANCESTRY,
    ancestry
  };
};

export const SELECT_ABILITY_BOOST = "SELECT_ABILITY_BOOST";

export const selectAbilityBoost = ({ type, option, index }) => {
  return {
    type: SELECT_ABILITY_BOOST,
    option,
    index
  };
};

export const SAVE_AND_CONTINUE = "SAVE_AND_CONTINUE";

export const saveAndContinue = ({ type, nextStep }) => {
  return {
    type: SAVE_AND_CONTINUE,
    nextStep
  };
};
