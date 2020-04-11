import React from "react";

import BackgroundSelection from "./BackgroundSelection";
import BackgroundAbilityBoosts from "./BackgroundAbilityBoosts";
import { STAGE_BACKGROUND, STEP_BACKGROUND_ABILITIES } from "../constants";

const mapComponent = ({ state, dispatch }) => {
  switch (state.currentStep) {
    case STAGE_BACKGROUND: {
      return <BackgroundSelection {...{ state, dispatch }} />;
    }
    case STEP_BACKGROUND_ABILITIES: {
      return <BackgroundAbilityBoosts {...{ state, dispatch }} />;
    }
    default:
      return null;
  }
};

const BackroundStage = (props) => {
  return mapComponent(props);
};

export default BackroundStage;
