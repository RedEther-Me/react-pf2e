import React, { Fragment, useReducer } from "react";

import { Card, SelectionLayout } from "../components";

import Steps from "./Steps";
import Stages from "./Stages";
import AncestryStage from "./AncestryStage";
import ClassStage from "./ClassStage";
import AbilityScoresStage from "./AbilityScoresStage";
import SkillStage from "./SkillStage";

import {
  STAGE_ANCESTRY,
  STAGE_CLASS,
  STAGE_ABILITY_SCORES,
  STAGE_SKILLS,
  STAGE_EQUIPMENT,
} from "./constants";
import creationReducer, { initialState } from "./creationReducer";

const mapComponent = (stepName) => {
  switch (stepName) {
    case STAGE_ANCESTRY:
      return [AncestryStage, STAGE_CLASS];
    case STAGE_CLASS:
      return [ClassStage, STAGE_ABILITY_SCORES];
    case STAGE_ABILITY_SCORES:
      return [AbilityScoresStage, STAGE_SKILLS];
    case STAGE_SKILLS:
      return [SkillStage, STAGE_EQUIPMENT];
    case STAGE_EQUIPMENT:
      return [() => null, ""];
    default:
      return [];
  }
};

export default (props) => {
  const [state, dispatch] = useReducer(creationReducer, initialState);

  const [SecondComponent, nextStage] = mapComponent(state.currentStage);
  const firstColumn = <Steps {...{ state, dispatch, nextStage }} />;
  const secondColumn = <SecondComponent {...{ state, dispatch }} />;

  return (
    <Fragment>
      <Stages {...{ state, dispatch }} />
      <SelectionLayout {...{ firstColumn, secondColumn }}>
        <Card fullHeight>{JSON.stringify(state.preview)}</Card>
      </SelectionLayout>
    </Fragment>
  );
};
