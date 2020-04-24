import React, { Fragment, useReducer } from "react";

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
      return AncestryStage;
    case STAGE_CLASS:
      return ClassStage;
    case STAGE_ABILITY_SCORES:
      return AbilityScoresStage;
    case STAGE_SKILLS:
      return SkillStage;
    case STAGE_EQUIPMENT:
      return () => null;
    default:
      return [];
  }
};

const CharacterCreation = (props) => {
  const [state, dispatch] = useReducer(creationReducer, initialState);

  const SecondComponent = mapComponent(state.currentStage);

  return (
    <Fragment>
      <Stages {...{ state, dispatch }} />
      <SecondComponent {...{ state, dispatch }} />
    </Fragment>
  );
};

export default CharacterCreation;
