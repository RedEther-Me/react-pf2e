import React from "react";

import ClassSelection from "./ClassSelection";
import { STAGE_CLASS } from "../constants";

const mapComponent = ({ state, dispatch }) => {
  switch (state.currentStep) {
    case STAGE_CLASS: {
      return <ClassSelection {...{ state, dispatch }} />;
    }
    default:
      return null;
  }
};

const ClassStage = (props) => {
  return mapComponent(props);
};

export default ClassStage;
