import { abilities } from "../data";

import {
  SWITCH_ANCESTRY,
  SELECT_ABILITY,
  SELECT_HERITAGE
} from "./ancestryActions";

const Immutable = require("seamless-immutable").static;

const {
  STRENGTH,
  DEXTERITY,
  CONSTITUTION,
  INTELLIGENCE,
  WISDOM,
  CHARISMA,
  FREE_1,
  FREE_2,
  list: abilityList
} = abilities;

export const initialState = {
  complete: {
    abilities: false,
    heritage: false
  },
  choices: {},
  state: {
    abilites: {
      [STRENGTH]: 10,
      [DEXTERITY]: 10,
      [CONSTITUTION]: 10,
      [INTELLIGENCE]: 10,
      [WISDOM]: 10,
      [CHARISMA]: 10
    }
  }
};

export default (state, action) => {
  switch (action.type) {
    case SWITCH_ANCESTRY: {
      const { ancestry } = action;
      const setAbilities = abilityList.reduce((acc, ability) => {
        if (ancestry.boosts.includes(ability)) {
          return { ...acc, [ability]: 12 };
        }

        if (ancestry.ability_flaw === ability) {
          return {
            ...acc,
            [ability]: 8
          };
        }

        return { ...acc, [ability]: 10 };
      }, {});

      return {
        complete: {
          abilities: false,
          heritage: false
        },
        choices: {
          ancestry,
          boosts: {}
        },
        state: {
          abilities: setAbilities,
          ...ancestry.state,
          ancestry: ancestry.name
        }
      };
    }
    case SELECT_ABILITY: {
      const { ability, slot } = action;
      const { ancestry, boosts } = state.choices;

      const previous = boosts[slot];

      const updatedAbilities = previous
        ? {
            ...state.state.abilities,
            [previous]: state.state.abilities[previous] - 2,
            [ability]: state.state.abilities[ability] + 2
          }
        : {
            ...state.state.abilities,
            [ability]: state.state.abilities[ability] + 2
          };

      const hasTwoFree = ancestry.boosts.includes(FREE_2);
      const isValidFree1 = slot === FREE_1 ? !!ability : boosts[FREE_1];
      const isValidFree2 =
        slot === FREE_2 ? !!ability : !hasTwoFree || boosts[FREE_2];
      const isValid = isValidFree1 && isValidFree2;

      return Immutable.merge(
        state,
        {
          complete: {
            abilities: isValid
          },
          choices: {
            boosts: {
              [slot]: ability
            }
          },
          state: { abilities: updatedAbilities }
        },
        { deep: true }
      );
    }
    case SELECT_HERITAGE: {
      const { heritage } = action;

      return Immutable.merge(
        state,
        {
          complete: {
            heritage: true
          },
          choices: {
            heritage
          },
          state: {
            ...heritage.state,
            heritage: heritage.name
          }
        },
        { deep: true }
      );
    }
    default:
      return state;
  }
};
