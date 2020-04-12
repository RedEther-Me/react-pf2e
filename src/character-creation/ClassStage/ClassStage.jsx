import React from "react";

import ClassSelection from "./ClassSelection";
import ClassSkillsSelection from "./ClassSkillsSelection";
import { STAGE_CLASS, STEP_CLASS_SKILLS } from "../constants";

const mapComponent = ({ state, dispatch }) => {
  switch (state.currentStep) {
    case STAGE_CLASS: {
      return <ClassSelection {...{ state, dispatch }} />;
    }
    case STEP_CLASS_SKILLS: {
      return <ClassSkillsSelection {...{ state, dispatch }} />;
    }
    default:
      return null;
  }
};

const ClassStage = (props) => {
  return mapComponent(props);
};

export default ClassStage;
