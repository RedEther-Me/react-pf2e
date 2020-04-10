import React, { Fragment, useReducer } from "react";

import { Card, SelectionLayout } from "../components";

import Steps from "./Steps";
import Stages from "./Stages";
import AncestryStep from "./AncestryStep";

import creationReducer, {
  initialState,
  STAGE_ANCESTRY,
  STAGE_ANCESTRY_DATA,
} from "./creationReducer";

const mapComponent = (stepName) => {
  switch (stepName) {
    case STAGE_ANCESTRY:
      return [STAGE_ANCESTRY_DATA.steps, AncestryStep];
    default:
      return () => null;
  }
};

export default (props) => {
  const [state, dispatch] = useReducer(creationReducer, initialState);

  const [steps, SecondComponent] = mapComponent(state.currentStage);
  const firstColumn = <Steps {...{ state, dispatch, steps }} />;
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
