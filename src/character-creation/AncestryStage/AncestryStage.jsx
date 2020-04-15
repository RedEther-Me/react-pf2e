import React from "react";

import AncestrySelection from "./AncestrySelection";
import AncestryAbilityBoosts from "./AncestryAbilityBoosts";
import HeritageSelection from "./HeritageStage";
import BackgroundSelection from "./BackgroundSelection";
import BackgroundSkillSelection from "./BackgroundSkillSelection";
import BackgroundAbilityBoosts from "./BackgroundAbilityBoosts";

import {
  STEP_ANCESTRY_ABILITIES,
  STEP_HERITAGE,
  STEP_BACKGROUND,
  STEP_BACKGROUND_SKILL,
  STEP_BACKGROUND_ABILITIES,
  STEP_SELECT_ANCESTRY,
} from "../constants";

const mapComponent = ({ state, dispatch }) => {
  switch (state.currentStep) {
    case STEP_SELECT_ANCESTRY: {
      return <AncestrySelection {...{ state, dispatch }} />;
    }
    case STEP_ANCESTRY_ABILITIES: {
      return <AncestryAbilityBoosts {...{ state, dispatch }} />;
    }
    case STEP_HERITAGE: {
      return <HeritageSelection {...{ state, dispatch }} />;
    }
    case STEP_BACKGROUND: {
      return <BackgroundSelection {...{ state, dispatch }} />;
    }
    case STEP_BACKGROUND_SKILL: {
      return <BackgroundSkillSelection {...{ state, dispatch }} />;
    }
    case STEP_BACKGROUND_ABILITIES: {
      return <BackgroundAbilityBoosts {...{ state, dispatch }} />;
    }
    default:
      return null;
  }
};

const AncestryStage = (props) => {
  return mapComponent(props);
};

export default AncestryStage;
