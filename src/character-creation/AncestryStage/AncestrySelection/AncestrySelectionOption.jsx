import React from "react";
import classnames from "classnames";

import { makeSelection } from "../../creationActions";
import { STAGE_ANCESTRY } from "../../creationReducer";

export default (props) => {
  const { ancestry, state, dispatch } = props;
  const selectedAncestry = state.choices[STAGE_ANCESTRY];

  const onAncestryClick = () => {
    dispatch(makeSelection({ key: STAGE_ANCESTRY, value: ancestry }));
  };

  return (
    <button
      className={classnames("list-group-item list-group-item-action", {
        active: selectedAncestry && selectedAncestry.name === ancestry.name,
      })}
      onClick={onAncestryClick}
    >
      {ancestry.name}
    </button>
  );
};
