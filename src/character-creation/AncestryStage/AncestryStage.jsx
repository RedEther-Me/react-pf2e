import React from "react";

import { SelectionLayout } from "../../components";
import CharacterView from "../../components/CharacterView";
import Steps from "../Steps";

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
  STAGE_CLASS,
} from "../constants";

const mapComponent = ({ state, dispatch }) => {
  switch (state.currentStep) {
    case STEP_SELECT_ANCESTRY: {
      return AncestrySelection;
    }
    case STEP_ANCESTRY_ABILITIES: {
      return AncestryAbilityBoosts;
    }
    case STEP_HERITAGE: {
      return HeritageSelection;
    }
    case STEP_BACKGROUND: {
      return BackgroundSelection;
    }
    case STEP_BACKGROUND_SKILL: {
      return BackgroundSkillSelection;
    }
    case STEP_BACKGROUND_ABILITIES: {
      return BackgroundAbilityBoosts;
    }
    default:
      return null;
  }
};

const AncestryStage = (props) => {
  const { state, dispatch } = props;

  const SecondComponent = mapComponent(props);
  const firstColumn = (
    <Steps {...{ state, dispatch, nextStage: STAGE_CLASS }} />
  );
  const secondColumn = <SecondComponent {...{ state, dispatch }} />;

  return (
    <SelectionLayout {...{ firstColumn, secondColumn }}>
      <CharacterView {...{ state }} />
    </SelectionLayout>
  );
};

export default AncestryStage;
