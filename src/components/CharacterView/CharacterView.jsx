import React from "react";

import Card from "../Card";
import Row from "../Row";
import Col from "../Col";

import ActionsBlock from "./ActionsBlock";
import FeatBlock from "./FeatBlock";
import SkillBlock from "./SkillBlock";
import StatBlock from "./StatBlock";
import VitalsBlock from "./VitalsBlock";

const CharacterView = (props) => {
  const { state } = props;
  console.log(state.preview);

  return (
    <Card fullHeight>
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
    </Card>
  );
};

export default CharacterView;
