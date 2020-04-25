import React from "react";

import { Card, CardHeader, Row, Col } from "../../../components";
import {
  STEP_CLASS_SELECTION,
  STEP_CLASS_SUB_SELECTION,
} from "../../constants";

const ClassFeatureMap = (props) => {
  const { state } = props;
  const { choices, preview } = state;
  const { featureMap } = preview;

  const {
    [STEP_CLASS_SELECTION]: classType,
    // [STEP_CLASS_SUB_SELECTION]: subClassType,
  } = choices;

  if (!classType) {
    return null;
  }

  return (
    <Card fullHeight>
      <Row className="mb-4">
        <Col className="col-2">Key Ability:</Col>
        <Col className="col-2">{classType.ability_boosts[0]}</Col>
      </Row>
      <Row>
        <Col>
          <table className="table">
            <thead>
              <tr>
                <th>Level</th>
                <th>Features</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(featureMap).map(([level, features]) => (
                <tr key={level}>
                  <td>{level}</td>
                  <td>{features.map((f) => f.name).join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </Card>
  );
};

export default ClassFeatureMap;
