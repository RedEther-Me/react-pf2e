import {
  MAKE_SELECTION,
  MAKE_SELECTIONS,
  SAVE_AND_CONTINUE,
  NEXT_STEP,
  SWITCH_STAGE,
} from "./creationActions";

import { STAGE_ANCESTRY, defaultAttributes, stageObj } from "./constants";
import { calculateState } from "./calculatePreview";

export * from "./constants";

const Immutable = require("seamless-immutable").static;

export const initialState = Immutable.from({
  stages: stageObj,
  choices: {},
  currentStage: STAGE_ANCESTRY,
  currentStep: stageObj[STAGE_ANCESTRY].steps[0].name,
  character: defaultAttributes,
  preview: defaultAttributes,
});

const enableStageAndStep = ({ state, stage, stepIndex, setCurrent = true }) => {
  if (!stage || !(stepIndex >= 0)) {
    console.log("tried to enable a stage/step that are illegal: ", {
      stage,
      stepIndex,
    });
    return state;
  }

  const withStageEnabled = Immutable.setIn(
    state,
    ["stages", stage, "enabled"],
    true
  );
  const withStepEnabled = Immutable.setIn(
    withStageEnabled,
    ["stages", stage, "steps", stepIndex, "enabled"],
    true
  );

  if (!setCurrent) {
    return withStepEnabled;
  }

  const updates = {
    currentStage: stage,
    currentStep: state.stages[stage].steps[stepIndex].name,
  };

  return Immutable.merge(withStepEnabled, updates);
};

const enableNextStep = ({ state, stage, currentStep, setCurrent = true }) => {
  const { steps } = state.stages[stage];

  const currentStepIndex = steps.findIndex((step) => step.name === currentStep);
  const sliceStepIndex = steps
    .slice(currentStepIndex + 1)
    .findIndex((step) => step.visible === true);

  const stepIndex = currentStepIndex + 1 + sliceStepIndex;

  return enableStageAndStep({ state, stage, stepIndex, setCurrent });
};

const enableStepByName = ({ state, stage, stepName, setCurrent = true }) => {
  const { steps } = state.stages[stage];

  const stepIndex = steps.findIndex(
    (step) => step.visible === true && step.name === stepName
  );

  return enableStageAndStep({ state, stage, stepIndex, setCurrent });
};

const makeSelection = ({ state, key, value }) => {
  const choices = {
    ...state.choices,
    [key]: value,
  };

  const withChoices = Immutable.set(state, "choices", choices);

  const withUpdates = calculateState(withChoices);

  console.log(withUpdates);

  return withUpdates;
};

export default (state, action) => {
  switch (action.type) {
    case MAKE_SELECTIONS: {
      const { selections } = action;

      return selections.reduce(
        (acc, { key, value }) => makeSelection({ state: acc, key, value }),
        state
      );
    }
    case MAKE_SELECTION: {
      const { key, value } = action;

      return makeSelection({ state, key, value });
    }
    case NEXT_STEP: {
      const { step } = action;

      const { currentStage, currentStep } = state;

      if (!step) {
        return enableNextStep({
          state,
          stage: currentStage,
          currentStep,
        });
      } else {
        return enableStepByName({
          state,
          stage: currentStage,
          stepName: step,
        });
      }
    }
    case SAVE_AND_CONTINUE: {
      const { nextStep } = action;

      const updates = {
        character: state.preview,
      };

      const withUpdates = Immutable.merge(state, updates);
      const withStageEnabled = enableStageAndStep({
        state: withUpdates,
        stage: nextStep,
        stepIndex: 0,
      });

      return withStageEnabled;
    }
    case SWITCH_STAGE: {
      const { stage } = action;

      return enableStageAndStep({
        state,
        stage,
        stepIndex: 0,
      });
    }
    default:
      return state;
  }
};
