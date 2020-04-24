import React from "react";

import { SelectionLayout } from "../../components";
import Steps from "../Steps";

import ClassFeatureMap from "./ClassFeatureMap";
import ClassSelection from "./ClassSelection";
import { STAGE_ABILITY_SCORES, STEP_CLASS_SELECTION } from "../constants";

const mapComponent = ({ state, dispatch }) => {
  switch (state.currentStep) {
    case STEP_CLASS_SELECTION: {
      return ClassSelection;
    }
    default:
      return null;
  }
};

const ClassStage = (props) => {
  const { state, dispatch } = props;

  const SecondComponent = mapComponent(props);
  const firstColumn = (
    <Steps {...{ state, dispatch, nextStage: STAGE_ABILITY_SCORES }} />
  );
  const secondColumn = <SecondComponent {...{ state, dispatch }} />;

  return (
    <SelectionLayout {...{ firstColumn, secondColumn }}>
      <ClassFeatureMap {...{ state }} />
    </SelectionLayout>
  );
};

export default ClassStage;
