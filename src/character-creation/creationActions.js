export const MAKE_SELECTION = "MAKE_SELECTION";

export const makeSelection = ({ type, key, value }) => {
  return {
    type: MAKE_SELECTION,
    key,
    value,
  };
};

export const MAKE_SELECTIONS = "MAKE_SELECTIONS";
export const makeMultiSelection = ({ type, selections }) => {
  return {
    type: MAKE_SELECTIONS,
    selections,
  };
};

export const NEXT_STEP = "NEXT_STEP";

export const nextStep = ({ type, step }) => {
  return {
    type: NEXT_STEP,
    step,
  };
};

export const SWITCH_STAGE = "SWITCH_STAGE";

export const switchStage = ({ type, stage }) => {
  return {
    type: SWITCH_STAGE,
    stage,
  };
};

export const SAVE_AND_CONTINUE = "SAVE_AND_CONTINUE";

export const saveAndContinue = ({ type, nextStep }) => {
  return {
    type: SAVE_AND_CONTINUE,
    nextStep,
  };
};
