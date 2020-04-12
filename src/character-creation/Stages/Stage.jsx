import React from "react";
import classnames from "classnames";

export default (props) => {
  const { stage, state } = props;
  const isActive = state.currentStage === stage.name;
  const isEnabled = state.order.includes(stage.name);

  return (
    <button
      type="button"
      className={classnames("list-group-item flex-fill", {
        active: isActive,
        "list-group-item-primary": isEnabled,
        "list-group-item-dark": !isEnabled,
      })}
    >
      {stage.name}
    </button>
  );
};
