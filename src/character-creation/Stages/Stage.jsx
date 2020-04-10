import React from "react";
import classnames from "classnames";

export default (props) => {
  const { stage, state } = props;
  const isActive = state.currentStage === stage.name;

  return (
    <button
      type="button"
      className={classnames("btn btn-outline-primary", {
        active: isActive,
      })}
    >
      {stage.name}
    </button>
  );
};
