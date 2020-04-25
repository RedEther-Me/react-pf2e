import React from "react";

import Row from "../../Row";
import Col from "../../Col";

import SkillBlock from "./SkillBlock";
import StatBlock from "./StatBlock";
import VitalsBlock from "./VitalsBlock";

const StatsAndSkills = (props) => {
  const { state } = props;

  return (
    <Row>
      <Col className="col-3">
        <StatBlock {...{ state }} />
      </Col>
      <Col className="col-3">
        <VitalsBlock {...{ state }} />
      </Col>
      <Col>
        <SkillBlock {...{ state }} />
      </Col>
    </Row>
  );
};

export default StatsAndSkills;
