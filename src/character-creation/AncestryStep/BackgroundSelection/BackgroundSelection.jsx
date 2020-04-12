import React from "react";

import { Card, CardHeader, Row, Col } from "../../../components";
import { backgrounds } from "../../../data";

import BackgroundSelectionOption from "./BackgroundSelectionOption";

import { nextStep } from "../../creationActions";
import { STEP_BACKGROUND, STEP_BACKGROUND_ABILITIES } from "../../constants";

export default (props) => {
  const { state, dispatch } = props;

  const isValid = STEP_BACKGROUND in state.choices;

  const header = <CardHeader label="Ancestry Selection" isValid={isValid} />;

  return (
    <Card header={header} fullHeight>
      <Row>
        <Col>
          <div className="list-group">
            {backgrounds.list.map((background) => {
              return (
                <BackgroundSelectionOption
                  {...{ background, state, dispatch }}
                  key={background.name}
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
            onClick={() =>
              dispatch(nextStep({ step: STEP_BACKGROUND_ABILITIES }))
            }
          >
            Continue
          </button>
        </Col>
      </Row>
    </Card>
  );
};
