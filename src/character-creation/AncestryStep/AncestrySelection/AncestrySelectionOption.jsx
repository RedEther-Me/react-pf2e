import React from "react";
import classnames from "classnames";

import { switchAncestry } from "../../creationActions";

export default props => {
  const { ancestry, state, dispatch } = props;
  const selectedAncestry = state.currentStep.ancestry;

  const onAncestryClick = () => {
    dispatch(switchAncestry({ ancestry }));
  };

  return (
    <button
      className={classnames("list-group-item list-group-item-action", {
        active: selectedAncestry && selectedAncestry.name === ancestry.name
      })}
      onClick={onAncestryClick}
    >
      {ancestry.name}
    </button>
  );
};
