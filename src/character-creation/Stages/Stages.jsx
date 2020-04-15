import React from "react";

import { Card } from "../../components";

import Stage from "./Stage";

export default (props) => {
  const { state, dispatch } = props;
  const { stages } = state;

  return (
    <Card className="mt-3">
      <div className="list-group list-group-horizontal">
        {Object.values(stages).map((stage) => (
          <Stage key={stage.name} {...{ stage, state, dispatch }} />
        ))}
      </div>
    </Card>
  );
};
