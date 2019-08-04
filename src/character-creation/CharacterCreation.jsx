import React, { useReducer } from "react";

import { Card, SelectionLayout } from "../components";

import Steps from "./Steps";
import AncestryStep from "./AncestryStep";

import creationReducer, {
  initialState,
  STEP_ANCESTRY
} from "./creationReducer";

const mapComponent = stepName => {
  switch (stepName) {
    case STEP_ANCESTRY:
      return AncestryStep;
    default:
      return () => null;
  }
};

export default props => {
  const [state, dispatch] = useReducer(creationReducer, initialState);

  const firstColumn = <Steps {...{ state, dispatch }} />;

  const SecondComponent = mapComponent(state.currentStep.name);
  const secondColumn = <SecondComponent {...{ state, dispatch }} />;

  return (
    <SelectionLayout {...{ firstColumn, secondColumn }}>
      <Card fullHeight>{JSON.stringify(state.preview)}</Card>
    </SelectionLayout>
  );
};
