import React from "react";
import classnames from "classnames";

import { makeSelection } from "../../creationActions";
import { STAGE_BACKGROUND } from "../../constants";

export default (props) => {
  const { background, state, dispatch } = props;
  const selectedBackground = state.choices[STAGE_BACKGROUND];

  const onBackgroundClick = () => {
    dispatch(makeSelection({ key: STAGE_BACKGROUND, value: background }));
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
