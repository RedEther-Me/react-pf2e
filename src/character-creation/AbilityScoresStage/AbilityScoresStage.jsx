import React from "react";

import AbilityScoresSelection from "./AbilityScoresSelection";
import { STAGE_ABILITY_SCORES } from "../constants";

const mapComponent = ({ state, dispatch }) => {
  console.log(state);
  switch (state.currentStep) {
    case STAGE_ABILITY_SCORES: {
      return <AbilityScoresSelection {...{ state, dispatch }} />;
    }
    default:
      return null;
  }
};

const ClassStage = (props) => {
  return mapComponent(props);
};

export default ClassStage;
