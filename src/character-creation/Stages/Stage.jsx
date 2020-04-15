import React from "react";
import classnames from "classnames";

import { switchStage } from "../creationActions";

export default (props) => {
  const { stage, state, dispatch } = props;
  const isActive = state.currentStage === stage.name;
  const { enabled: isEnabled } = stage;

  return (
    <button
      type="button"
      className={classnames("list-group-item flex-fill", {
        active: isActive,
        "list-group-item-primary": isEnabled,
        "list-group-item-dark": !isEnabled,
      })}
      onClick={() => {
        if (isEnabled && !isActive) {
          dispatch(switchStage({ stage: stage.name }));
        }
      }}
    >
      {stage.description}
    </button>
  );
};
