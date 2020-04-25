import React from "react";
import Row from "../../Row";
import Col from "../../Col";
import Card from "../../Card";
import Pill from "../../Pill";

const ActionLayout = (props) => {
  const { action } = props;
  console.log(action);

  return (
    <Card>
      <Row>
        <Col>
          <h5>{action.title || action.name}</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          {action.traits?.map((trait) => (
            <Pill {...{ label: trait, key: trait }} />
          ))}
        </Col>
      </Row>
    </Card>
  );
};

const ActionsBlock = (props) => {
  const { state } = props;
  const { actions = {} } = state.preview;

  return Object.entries(actions).map(([key, action]) => (
    <ActionLayout {...{ action, key }} />
  ));
};

export default ActionsBlock;
