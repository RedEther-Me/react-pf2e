import React from "react";
import classnames from "classnames";

import { makeSelection } from "../../creationActions";
import { STAGE_CLASS } from "../../constants";

export default (props) => {
  const { classType, state, dispatch } = props;
  const selectedClass = state.choices[STAGE_CLASS];

  const onClassClick = () => {
    dispatch(makeSelection({ key: STAGE_CLASS, value: classType }));
  };

  return (
    <button
      className={classnames("list-group-item list-group-item-action", {
        active: selectedClass && selectedClass.name === classType.name,
      })}
      onClick={onClassClick}
    >
      {classType.name}
    </button>
  );
};
