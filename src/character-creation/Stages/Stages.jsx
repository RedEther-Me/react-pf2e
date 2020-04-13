import React from "react";

import { Card } from "../../components";

import { stages } from "../creationReducer";

import Stage from "./Stage";

export default (props) => {
  const { state, dispatch } = props;

  return (
    <Card className="mt-3">
      <div className="list-group list-group-horizontal">
        {stages.map((stage) => (
          <Stage key={stage.name} {...{ stage, state, dispatch }} />
        ))}
      </div>
    </Card>
  );
};
