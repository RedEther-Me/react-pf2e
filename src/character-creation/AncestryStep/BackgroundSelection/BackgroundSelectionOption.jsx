import React from "react";
import classnames from "classnames";

import { makeSelection } from "../../creationActions";
import { STEP_BACKGROUND } from "../../constants";

export default (props) => {
  const { background, state, dispatch } = props;
  const selectedBackground = state.choices[STEP_BACKGROUND];

  const onBackgroundClick = () => {
    dispatch(makeSelection({ key: STEP_BACKGROUND, value: background }));
  };

  return (
    <button
      className={classnames("list-group-item list-group-item-action", {
        active:
          selectedBackground && selectedBackground.name === background.name,
      })}
      onClick={onBackgroundClick}
    >
      {background.name}
    </button>
  );
};
