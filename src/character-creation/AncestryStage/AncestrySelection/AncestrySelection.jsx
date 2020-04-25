import React from "react";

import { Card, CardHeader, Row, Col } from "../../../components";
import ancestries from "../../../data/ancestries";

import AncestrySelectionOption from "./AncestrySelectionOption";

import { nextStep } from "../../creationActions";
import { STEP_SELECT_ANCESTRY } from "../../constants";

const AncestrySelection = (props) => {
  const { state, dispatch } = props;

  const isValid = STEP_SELECT_ANCESTRY in state.choices;

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
            onClick={() => dispatch(nextStep({}))}
          >
            Continue
          </button>
        </Col>
      </Row>
    </Card>
  );
};

export default AncestrySelection;
