import React from "react";

import { Card } from "../../components";

import { steps } from "../creationReducer";

import Step from "./Step";

export default props => {
  const { state } = props;

  return (
    <Card fullHeight>
      {steps.map(step => (
        <Step key={step.name} {...{ step, state }} />
      ))}
    </Card>
  );
};
