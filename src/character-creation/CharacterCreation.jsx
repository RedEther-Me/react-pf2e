import React, { Fragment, useReducer } from "react";

import { Card, SelectionLayout } from "../components";

import Steps from "./Steps";
import Stages from "./Stages";
import AncestryStep from "./AncestryStep";
import ClassStage from "./ClassStage";

import {
  STAGE_ANCESTRY,
  STAGE_ANCESTRY_DATA,
  STAGE_CLASS,
  STAGE_CLASS_DATA,
  STAGE_ABILITIES,
  STAGE_ABILITIES_DATA,
  STAGE_EQUIPMENT,
  STAGE_EQUIPMENT_DATA,
} from "./constants";
import creationReducer, { initialState } from "./creationReducer";

const mapComponent = (stepName) => {
  switch (stepName) {
    case STAGE_ANCESTRY:
      return [STAGE_ANCESTRY_DATA.steps, AncestryStep, STAGE_CLASS];
    case STAGE_CLASS:
      return [STAGE_CLASS_DATA.steps, ClassStage, STAGE_ABILITIES];
    case STAGE_ABILITIES:
      return [STAGE_ABILITIES_DATA.steps, () => null, STAGE_EQUIPMENT];
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
