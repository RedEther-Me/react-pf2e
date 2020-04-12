import React, { Fragment, useReducer } from "react";

import { Card, SelectionLayout } from "../components";

import Steps from "./Steps";
import Stages from "./Stages";
import AncestryStep from "./AncestryStep";
import HeritageStage from "./HeritageStage";
import BackgroundStage from "./BackgroundStage";
import ClassStage from "./ClassStage";

import {
  STAGE_ANCESTRY,
  STAGE_ANCESTRY_DATA,
  STAGE_HERITAGE,
  STAGE_HERITAGE_DATA,
  STAGE_BACKGROUND,
  STAGE_BACKGROUND_DATA,
  STAGE_CLASS,
  STAGE_CLASS_DATA,
} from "./constants";
import creationReducer, { initialState } from "./creationReducer";

const mapComponent = (stepName) => {
  switch (stepName) {
    case STAGE_ANCESTRY:
      return [STAGE_ANCESTRY_DATA.steps, AncestryStep, STAGE_HERITAGE];
    case STAGE_HERITAGE:
      return [STAGE_HERITAGE_DATA.steps, HeritageStage, STAGE_BACKGROUND];
    case STAGE_BACKGROUND:
      return [STAGE_BACKGROUND_DATA.steps, BackgroundStage, STAGE_CLASS];
    case STAGE_CLASS:
      return [STAGE_CLASS_DATA.steps, ClassStage, ""];
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
