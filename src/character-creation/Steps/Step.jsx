import React from "react";
import classnames from "classnames";

import { nextStep } from "../creationActions";

export default (props) => {
  const { step, state, dispatch } = props;
  const isActive = state.currentStep === step.name;
  const { enabled: isEnabled } = step;

  return (
    <li
      className={classnames("list-group-item list-group-item-action", {
        active: isActive,
        "list-group-item-primary": isEnabled,
        "list-group-item-dark": !isEnabled,
      })}
      disabled={!isEnabled}
      onClick={() => {
        if (isEnabled) {
          dispatch(nextStep({ step: step.name }));
        }
      }}
    >
      {step.name}
    </li>
  );
};
