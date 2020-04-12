import React from "react";

import { Card, CardHeader, Row, Col } from "../../../components";

import HeritageSelectionOption from "./HeritageSelectionOption";

import { nextStep } from "../../creationActions";
import {
  STAGE_ANCESTRY,
  STEP_HERITAGE,
  STEP_BACKGROUND,
} from "../../creationReducer";

export default (props) => {
  const { state, dispatch } = props;

  const isValid = STEP_HERITAGE in state.choices;

  const { heritages } = state.choices[STAGE_ANCESTRY];

  const header = <CardHeader label="Heritage Selection" isValid={isValid} />;

  return (
    <Card header={header} fullHeight>
      <Row>
        <Col>
          <div className="list-group">
            {Object.values(heritages).map((heritage) => {
              return (
                <HeritageSelectionOption
                  {...{ heritage, state, dispatch }}
                  key={heritage.name}
                />
              );
            })}
          </div>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <button
            className="btn btn-primary"
            disabled={!isValid}
            onClick={() => dispatch(nextStep({ step: STEP_BACKGROUND }))}
          >
            Continue
          </button>
        </Col>
      </Row>
    </Card>
  );
};
