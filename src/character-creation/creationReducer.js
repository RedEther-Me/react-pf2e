import {
  MAKE_SELECTION,
  SAVE_AND_CONTINUE,
  NEXT_STEP,
} from "./creationActions";

import { STAGE_ANCESTRY, defaultAttributes, stageObj } from "./constants";
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

      return Immutable.merge(state, updates);
    }
    case NEXT_STEP: {
      const isPresent = state.order.includes(action.step);
      const updates = {
        order: !isPresent ? [...state.order, action.step] : state.order,
        currentStep: action.step,
      };

      return Immutable.merge(state, updates);
    }
    case SAVE_AND_CONTINUE: {
      const { nextStep } = action;

      const firstStep = stageObj[nextStep].name;

      const updates = {
        currentStage: nextStep,
        currentStep: firstStep,
        character: state.preview,
        order: [...state.order, nextStep],
      };

      return Immutable.merge(state, updates);
    }
    default:
      return state;
  }
};
