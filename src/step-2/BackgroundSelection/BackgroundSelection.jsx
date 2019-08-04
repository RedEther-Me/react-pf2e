import React from "react";

import { Card, CardHeader, Row, Col, LinkButton } from "../../components";
import { backgrounds } from "../../data";

import BackgroundSelectionOption from "./BackgroundSelectionOption";

export default props => {
  const { state, dispatch } = props;
  const isValid = false;

  const header = <CardHeader label="Ancestry Selection" isValid={isValid} />;

  return (
    <Card header={header} fullHeight>
      <Row>
        <Col>
          <div className="list-group">
            {backgrounds.list.map(background => {
              return <BackgroundSelectionOption {...{ background }} />;
            })}
          </div>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <LinkButton
            to={{
              pathname: "/step-3",
              state: {
                ...state,
                "step-2": state.choices,
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
