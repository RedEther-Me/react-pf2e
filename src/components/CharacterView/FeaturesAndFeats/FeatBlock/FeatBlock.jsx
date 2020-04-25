import React from "react";
import Row from "../../../Row";
import Col from "../../../Col";
import Card from "../../../Card";
import Pill from "../../../Pill";

const FeatLayout = (props) => {
  const { feat } = props;

  return (
    <Card>
      <Row>
        <Col>
          <h5>{feat.title}</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          {feat.traits?.map((trait) => (
            <Pill {...{ label: trait, key: trait }} />
          ))}
        </Col>
      </Row>
    </Card>
  );
};

const FeatBlock = (props) => {
  const { state } = props;
  const { feats } = state.preview;

  const displayFeats = Object.entries(feats).filter(([key]) => key !== "free");

  return displayFeats.map(([key, feat]) => (
    <FeatLayout feat={feat} key={key} />
  ));
};

export default FeatBlock;
