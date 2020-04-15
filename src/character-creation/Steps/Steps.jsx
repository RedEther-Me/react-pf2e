import React from "react";

import { Card, Row, Col } from "../../components";

import Step from "./Step";
import { saveAndContinue } from "../creationActions";

export default (props) => {
  const { state, dispatch, nextStage } = props;

  const { steps } = state.stages[state.currentStage];

  return (
    <Card fullHeight>
      <ul className="list-group">
        {steps
          .filter((step) => step.visible)
          .map((step) => (
            <Step key={step.name} {...{ step, state, dispatch }} />
          ))}
      </ul>
      <Row className="mt-2">
        <Col>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(saveAndContinue({ nextStep: nextStage }))}
          >
            Save And Continue
          </button>
        </Col>
      </Row>
    </Card>
  );
};
