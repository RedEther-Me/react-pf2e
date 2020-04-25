import React from "react";

import { SelectionLayout } from "../../components";
import Steps from "../Steps";

import ClassFeatureMap from "./ClassFeatureMap";
import ClassSelection from "./ClassSelection";
import ClassFeatSelection from "./ClassFeatSelection";
import {
  STAGE_ABILITY_SCORES,
  STEP_CLASS_SELECTION,
  STEP_CLASS_FEAT,
} from "../constants";

const mapComponent = ({ state }) => {
  switch (state.currentStep) {
    case STEP_CLASS_SELECTION: {
      return ClassSelection;
    }
    case STEP_CLASS_FEAT: {
      return ClassFeatSelection;
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
