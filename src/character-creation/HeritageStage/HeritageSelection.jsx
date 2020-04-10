import React from "react";

import { Card, CardHeader, Row, Col } from "../../components";
import { ancestries } from "../../data";

import HeritageSelectionOption from "./HeritageSelectionOption";

import { STAGE_ANCESTRY, STAGE_HERITAGE } from "../creationReducer";

export default (props) => {
  const { state, dispatch } = props;

  const isValid = STAGE_HERITAGE in state.choices;

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
    </Card>
  );
};
