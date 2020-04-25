import React from "react";

import { SelectionLayout } from "../../components";
import CharacterView from "../../components/CharacterView";
import Steps from "../Steps";

import AbilityScoresSelection from "./AbilityScoresSelection";
import { STAGE_SKILLS, STEP_ABILITY_SCORES } from "../constants";

const mapComponent = ({ state }) => {
  switch (state.currentStep) {
    case STEP_ABILITY_SCORES: {
      return AbilityScoresSelection;
    }
    default:
      return null;
  }
};

const AbilityScoreStage = (props) => {
  const { state, dispatch } = props;

  const SecondComponent = mapComponent(props);
  const firstColumn = (
    <Steps {...{ state, dispatch, nextStage: STAGE_SKILLS }} />
  );
  const secondColumn = <SecondComponent {...{ state, dispatch }} />;

  return (
    <SelectionLayout {...{ firstColumn, secondColumn }}>
      <CharacterView {...{ state }} />
    </SelectionLayout>
  );
};

export default AbilityScoreStage;
