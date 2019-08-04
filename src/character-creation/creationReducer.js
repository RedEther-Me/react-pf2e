import { abilities } from "../data";

import {
  SWITCH_ANCESTRY,
  SELECT_ABILITY_BOOST,
  SAVE_AND_CONTINUE
} from "./creationActions";

const Immutable = require("seamless-immutable").static;

const {
  STRENGTH,
  DEXTERITY,
  CONSTITUTION,
  INTELLIGENCE,
  WISDOM,
  CHARISMA
} = abilities;

export const STEP_ANCESTRY = "Ancestry";
export const STEP_ANCESTRY_DATA = { name: STEP_ANCESTRY };

export const STEP_HERITAGE = "Heritage";
export const STEP_HERITAGE_DATA = { name: STEP_HERITAGE };

export const STEP_BACKGROUND = "Background";
export const STEP_BACKGROUND_DATA = { name: STEP_BACKGROUND };

export const steps = [
  STEP_ANCESTRY_DATA,
  STEP_HERITAGE_DATA,
  STEP_BACKGROUND_DATA
];

export const initialState = {
  currentStep: {
    ...STEP_ANCESTRY_DATA
  },
  character: {
    [STRENGTH]: 10,
    [DEXTERITY]: 10,
    [CONSTITUTION]: 10,
    [INTELLIGENCE]: 10,
    [WISDOM]: 10,
    [CHARISMA]: 10
  },
  preview: {
    [STRENGTH]: 10,
    [DEXTERITY]: 10,
    [CONSTITUTION]: 10,
    [INTELLIGENCE]: 10,
    [WISDOM]: 10,
    [CHARISMA]: 10
  }
};

export default (state, action) => {
  switch (action.type) {
    case SWITCH_ANCESTRY: {
      const { ancestry } = action;

      const updates = {
        currentStep: {
          ancestry,
          ability_boosts: {
            groups: ancestry.ability_boosts
          }
        },
        preview: {
          ...ancestry.state,
          ...ancestry.ability_boosts.reduce((acc, boost) => {
            if (typeof boost === "string") {
              return { ...acc, [boost]: 12 };
            }
            return acc;
          }, {}),
          [ancestry.ability_flaw]: 8
        }
      };

      return Immutable.merge(initialState, updates, { deep: true });
    }
    case SELECT_ABILITY_BOOST: {
      const { index, option } = action;

      const previous = state.currentStep.ability_boosts
        ? state.currentStep.ability_boosts[index]
        : undefined;

      if (previous === option) {
        return state;
      }

      const isValid = state.currentStep.ability_boosts.groups.reduce(
        (acc, group, idx) => {
          if (typeof group === "string") {
            return acc;
          }

          const lookup =
            index === idx ? option : state.currentStep.ability_boosts[idx];
          return acc && !!lookup;
        },
        true
      );
      console.log(isValid);

      const updates = {
        currentStep: {
          isValid,
          ability_boosts: {
            [index]: option
          }
        },
        preview: {
          ...(previous ? { [previous]: state.preview[previous] - 2 } : {}),
          [option]: state.preview[option] + 2
        }
      };

      return Immutable.merge(state, updates, { deep: true });
    }
    case SAVE_AND_CONTINUE: {
      const { nextStep } = action;

      const updates = {
        currentStep: {
          ...nextStep
        },
        character: state.preview
      };

      return Immutable.replace(state, updates, { deep: true });
    }
    default:
      return state;
  }
};
