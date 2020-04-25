import React from "react";
import Row from "../../../Row";
import Col from "../../../Col";
import Card from "../../../Card";
import Pill from "../../../Pill";

const FeatureLayout = (props) => {
  const { feature } = props;

  return (
    <Card>
      <Row>
        <Col>
          <h5>{feature.title || feature.name}</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          {feature.traits?.map((trait) => (
            <Pill {...{ label: trait, key: trait }} />
          ))}
        </Col>
      </Row>
    </Card>
  );
};

const FeatureBlock = (props) => {
  const { state } = props;
  const { featureMap = {}, level } = state.preview;

  const levelArray = [...Array(level).keys()].map((i) => i + 1);

  return levelArray.reduce((acc, innerLevel) => {
    const levelFeatures = featureMap[innerLevel] || [];

    return [
      ...acc,
      levelFeatures.map((feature, index) => (
        <FeatureLayout feature={feature} key={index} />
      )),
    ];
  }, []);
};

export default FeatureBlock;
