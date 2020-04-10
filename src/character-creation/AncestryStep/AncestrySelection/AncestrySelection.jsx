import React from "react";

import { Card, CardHeader, Row, Col } from "../../../components";
import { ancestries } from "../../../data";

import AncestrySelectionOption from "./AncestrySelectionOption";

import { nextStep } from "../../creationActions";
import { STAGE_ANCESTRY, STEP_ANCESTRY_ABILITIES } from "../../creationReducer";

export default (props) => {
  const { state, dispatch } = props;

  const isValid = STAGE_ANCESTRY in state.choices;

  const header = <CardHeader label="Ancestry Selection" isValid={isValid} />;

  return (
    <Card header={header} fullHeight>
      <Row>
        <Col>
          <div className="list-group">
            {ancestries.list.map((ancestry) => {
              return (
                <AncestrySelectionOption
                  {...{ ancestry, state, dispatch }}
                  key={ancestry.name}
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
              dispatch(nextStep({ step: STEP_ANCESTRY_ABILITIES }))
            }
          >
            Continue
          </button>
        </Col>
      </Row>
    </Card>
  );
};
