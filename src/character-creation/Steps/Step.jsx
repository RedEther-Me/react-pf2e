import React from "react";
import classnames from "classnames";

import { nextStep } from "../creationActions";

export default (props) => {
  const { step, state, dispatch } = props;
  const isActive = state.currentStep === step.name;
  const { enabled: isEnabled } = step;

  return (
    <button
      className={classnames("list-group-item", {
        "list-group-item-primary": isEnabled,
        "list-group-item-dark": !isEnabled,
        active: isActive,
      })}
      onClick={() => {
        if (isEnabled) {
          dispatch(nextStep({ step: step.name }));
        }
      }}
    >
      {step.name}
    </button>
  );
};
