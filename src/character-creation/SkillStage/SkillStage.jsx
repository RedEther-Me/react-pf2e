import React from "react";

import { SelectionLayout } from "../../components";
import CharacterView from "../../components/CharacterView";
import Steps from "../Steps";

import SkillSelection from "./SkillSelection";
import { STAGE_EQUIPMENT, STEP_SKILLS } from "../constants";

const mapComponent = ({ state }) => {
  switch (state.currentStep) {
    case STEP_SKILLS: {
      return SkillSelection;
    }
    default:
      return null;
  }
};

const SkillStage = (props) => {
  const { state, dispatch } = props;

  const SecondComponent = mapComponent(props);
  const firstColumn = (
    <Steps {...{ state, dispatch, nextStage: STAGE_EQUIPMENT }} />
  );
  const secondColumn = <SecondComponent {...{ state, dispatch }} />;

  return (
    <SelectionLayout {...{ firstColumn, secondColumn }}>
      <CharacterView {...{ state }} />
    </SelectionLayout>
  );
};

export default SkillStage;
