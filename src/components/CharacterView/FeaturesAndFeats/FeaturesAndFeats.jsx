import React from "react";

import Row from "../../Row";
import Col from "../../Col";

import FeatBlock from "./FeatBlock";
import FeatureBlock from "./FeatureBlock";

const StatsAndSkills = (props) => {
  const { state } = props;

  return (
    <Row>
      <Col>
        <FeatBlock {...{ state }} />
      </Col>
      <Col>
        <FeatureBlock {...{ state }} />
      </Col>
    </Row>
  );
};

export default StatsAndSkills;
