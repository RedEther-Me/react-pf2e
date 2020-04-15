import React from "react";
import classnames from "classnames";

import { makeSelection } from "../../creationActions";
import { STEP_HERITAGE } from "../../creationReducer";

const HeritageSelectionOption = (props) => {
  const { heritage, state, dispatch } = props;
  const selectedHeritage = state.choices[STEP_HERITAGE];

  const onHeritageClick = () => {
    dispatch(makeSelection({ key: STEP_HERITAGE, value: heritage }));
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

export default HeritageSelectionOption;
