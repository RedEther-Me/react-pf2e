export const SWITCH_ANCESTRY = "SWITCH_ANCESTRY";

export const switchAncestry = ({ type, ancestry }) => {
  return {
    type: SWITCH_ANCESTRY,
    ancestry
  };
};

export const SELECT_ABILITY = "SELECT_ABILITY";

export const selectAbility = ({ type, ability, slot }) => {
  return {
    type: SELECT_ABILITY,
    ability,
    slot
  };
};

export const SELECT_HERITAGE = "SELECT_HERITAGE";

export const selectHeritage = ({ type, heritage }) => {
  return {
    type: SELECT_HERITAGE,
    heritage
  };
};
