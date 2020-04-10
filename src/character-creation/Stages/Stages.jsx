import React from "react";

import { Card } from "../../components";

import { stages } from "../creationReducer";

import Stage from "./Stage";

export default (props) => {
  const { state } = props;

  return (
    <Card className="mt-3">
      <div className="btn-group">
        {stages.map((stage) => (
          <Stage key={stage.name} {...{ stage, state }} />
        ))}
      </div>
    </Card>
  );
};
