import React from "react";
import classnames from "classnames";

import { makeSelection } from "../../creationActions";
import { STEP_SELECT_ANCESTRY } from "../../creationReducer";

const AncestrySelectionOption = (props) => {
  const { ancestry, state, dispatch } = props;
  const selectedAncestry = state.choices[STEP_SELECT_ANCESTRY];

  const onAncestryClick = () => {
    dispatch(makeSelection({ key: STEP_SELECT_ANCESTRY, value: ancestry }));
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

export default AncestrySelectionOption;
