import React from "react";

import { Card, CardHeader, Row, Col, LinkButton } from "../../components";
import { ancestries } from "../../data";

import AncestrySelectionOption from "./AncestrySelectionOption";

export default props => {
  const { state, dispatch } = props;

  const isValid = Object.values(state.complete).reduce(
    (acc, check) => acc && check
  );
  const header = <CardHeader label="Ancestry Selection" isValid={isValid} />;

  return (
    <Card header={header} fullHeight>
      <Row>
        <Col>
          <div className="list-group">
            {ancestries.list.map(ancestry => {
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
          <LinkButton
            to={{
              pathname: "/step-2",
              state: {
                ...state,
                "step-1": state.choices,
                choices: {},
                complete: {}
              }
            }}
            className="btn btn-primary"
            disabled={!isValid}
          >
            Save And Continue
          </LinkButton>
        </Col>
      </Row>
    </Card>
  );
};
