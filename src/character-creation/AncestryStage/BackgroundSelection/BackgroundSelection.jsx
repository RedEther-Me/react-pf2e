import React from "react";

import { Card, CardHeader, Row, Col } from "../../../components";
import { BACKGROUND_LIST } from "../../../data/backgrounds";

import BackgroundSelectionOption from "./BackgroundSelectionOption";

import { nextStep } from "../../creationActions";
import { STEP_BACKGROUND } from "../../constants";

const BackgroundSelection = (props) => {
  const { state, dispatch } = props;

  const isValid = STEP_BACKGROUND in state.choices;

  const header = <CardHeader label="Background Selection" isValid={isValid} />;

  return (
    <Card header={header} fullHeight>
      <Row>
        <Col>
          <div className="list-group">
            {BACKGROUND_LIST.map((background) => {
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
            onClick={() => dispatch(nextStep({}))}
          >
            Continue
          </button>
        </Col>
      </Row>
    </Card>
  );
};

export default BackgroundSelection;