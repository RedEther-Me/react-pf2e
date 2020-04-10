import {
  MAKE_SELECTION,
  SAVE_AND_CONTINUE,
  NEXT_STEP,
} from "./creationActions";

import { STAGE_ANCESTRY, defaultAttributes } from "./constants";
import { calculateState } from "./calculatePreview";

export * from "./constants";

const Immutable = require("seamless-immutable").static;

const order = [STAGE_ANCESTRY];

export const initialState = {
  order,
  choices: {},
  currentStage: STAGE_ANCESTRY,
  currentStep: STAGE_ANCESTRY,
  character: defaultAttributes,
  preview: defaultAttributes,
};

export default (state, action) => {
  switch (action.type) {
    case MAKE_SELECTION: {
      const { key, value } = action;

      const choices = {
        ...state.choices,
        [key]: value,
      };

      const { preview, traits } = calculateState(state.order, choices);

      const updates = {
        choices,
        traits,
        preview,
      };

      return Immutable.merge(state, updates, { deep: true });
    }
    case NEXT_STEP: {
      const updates = {
        order: [...state.order, action.step],
        currentStep: action.step,
      };

      return Immutable.merge(state, updates, { deep: true });
    }
    // case SWITCH_ANCESTRY: {
    //   const { ancestry } = action;

    //   const updates = {
    //     currentStep: {
    //       ancestry,
    //       ability_boosts: {
    //         groups: ancestry.ability_boosts,
    //       },
    //     },
    //     preview: {
    //       ...ancestry.state,
    //       ...ancestry.ability_boosts.reduce((acc, boost) => {
    //         if (typeof boost === "string") {
    //           return { ...acc, [boost]: 12 };
    //         }
    //         return acc;
    //       }, {}),
    //       [ancestry.ability_flaw]: 8,
    //     },
    //   };

    //   return Immutable.merge(initialState, updates, { deep: true });
    // }
    // case SELECT_ABILITY_BOOST: {
    //   const { index, option } = action;

    //   const previous = state.currentStep.ability_boosts
    //     ? state.currentStep.ability_boosts[index]
    //     : undefined;

    //   if (previous === option) {
    //     return state;
    //   }

    //   const isValid = state.currentStep.ability_boosts.groups.reduce(
    //     (acc, group, idx) => {
    //       if (typeof group === "string") {
    //         return acc;
    //       }

    //       const lookup =
    //         index === idx ? option : state.currentStep.ability_boosts[idx];
    //       return acc && !!lookup;
    //     },
    //     true
    //   );

    //   const updates = {
    //     currentStep: {
    //       isValid,
    //       ability_boosts: {
    //         [index]: option,
    //       },
    //     },
    //     preview: {
    //       ...(previous ? { [previous]: state.preview[previous] - 2 } : {}),
    //       [option]: state.preview[option] + 2,
    //     },
    //   };

    //   return Immutable.merge(state, updates, { deep: true });
    // }
    case SAVE_AND_CONTINUE: {
      const { nextStep } = action;

      const updates = {
        currentStep: {
          ...nextStep,
        },
        character: state.preview,
      };

      return Immutable.replace(state, updates, { deep: true });
    }
    default:
      return state;
  }
};
