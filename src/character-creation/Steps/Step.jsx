import React from "react";
import classnames from "classnames";

export default props => {
  const { step, state } = props;
  const isActive = state.currentStep.name === step.name;

  return (
    <button
      className={classnames("list-group-item list-group-item-action", {
        active: isActive
      })}
    >
      {step.name}
    </button>
  );
};
