import React from "react";
import classnames from "classnames";

import { makeSelection } from "../creationActions";
import { STAGE_HERITAGE } from "../creationReducer";

export default (props) => {
  const { heritage, state, dispatch } = props;
  const selectedHeritage = state.choices[STAGE_HERITAGE];

  const onHeritageClick = () => {
    dispatch(makeSelection({ key: STAGE_HERITAGE, value: heritage }));
  };

  return (
    <button
      className={classnames("list-group-item list-group-item-action", {
        active: selectedHeritage && selectedHeritage.name === heritage.name,
      })}
      onClick={onHeritageClick}
    >
      {heritage.name}
    </button>
  );
};
