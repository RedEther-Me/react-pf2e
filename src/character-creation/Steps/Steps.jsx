import React from "react";

import { Card, Row, Col } from "../../components";

import Step from "./Step";
import { saveAndContinue } from "../creationActions";
import { STAGE_HERITAGE_DATA } from "../creationReducer";

export default (props) => {
  const { steps, state, dispatch } = props;

  return (
    <Card fullHeight>
      <ul className="list-group">
        {steps.map((step) => (
          <Step key={step.name} {...{ step, state, dispatch }} />
        ))}
      </ul>
      <Row className="mt-2">
        <Col>
          <button
            className="btn btn-primary"
            onClick={() =>
              dispatch(saveAndContinue({ nextStep: STAGE_HERITAGE_DATA }))
            }
          >
            Save And Continue
          </button>
        </Col>
      </Row>
    </Card>
  );
};
