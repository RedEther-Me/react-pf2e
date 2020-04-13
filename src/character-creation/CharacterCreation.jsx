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
  STAGE_ANCESTRY_DATA,
  STAGE_CLASS,
  STAGE_CLASS_DATA,
  STAGE_ABILITY_SCORES,
  STAGE_ABILITY_SCORES_DATA,
  STAGE_SKILLS,
  STAGE_SKILLS_DATA,
  STAGE_EQUIPMENT,
  STAGE_EQUIPMENT_DATA,
} from "./constants";
import creationReducer, { initialState } from "./creationReducer";

const mapComponent = (stepName) => {
  switch (stepName) {
    case STAGE_ANCESTRY:
      return [STAGE_ANCESTRY_DATA.steps, AncestryStage, STAGE_CLASS];
    case STAGE_CLASS:
      return [STAGE_CLASS_DATA.steps, ClassStage, STAGE_ABILITY_SCORES];
    case STAGE_ABILITY_SCORES:
      return [
        STAGE_ABILITY_SCORES_DATA.steps,
        AbilityScoresStage,
        STAGE_SKILLS,
      ];
    case STAGE_SKILLS:
      return [STAGE_SKILLS_DATA.steps, SkillStage, STAGE_EQUIPMENT];
    case STAGE_EQUIPMENT:
      return [STAGE_EQUIPMENT_DATA.steps, () => null, ""];
    default:
      return [];
  }
};

export default (props) => {
  const [state, dispatch] = useReducer(creationReducer, initialState);

  const [steps, SecondComponent, nextStage] = mapComponent(state.currentStage);
  const firstColumn = <Steps {...{ state, dispatch, steps, nextStage }} />;
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
