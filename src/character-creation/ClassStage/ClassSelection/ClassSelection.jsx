import React from "react";

import { Card, CardHeader, Row, Col } from "../../../components";
import { classes } from "../../../data";

import ClassSelectionOption from "./ClassSelectionOption";

import { nextStep } from "../../creationActions";
import { STEP_CLASS_SELECTION } from "../../constants";

const ClassSelection = (props) => {
  const { state, dispatch } = props;

  const isValid = STEP_CLASS_SELECTION in state.choices;

  const header = <CardHeader label="Class Selection" isValid={isValid} />;

  return (
    <Card header={header} fullHeight>
      <Row>
        <Col>
          <div className="list-group">
            {classes.list.map((classType) => {
              return (
                <ClassSelectionOption
                  {...{ classType, state, dispatch }}
                  key={classType.name}
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

export default ClassSelection;
