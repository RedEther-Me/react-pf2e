import React from "react";
import classnames from "classnames";

import { selectHeritage } from "../../ancestryActions";

export default props => {
  const { heritage, state, dispatch } = props;

  const selectedHeritage = state.choices.heritage;
  const isActive = selectedHeritage && selectedHeritage.name === heritage.name;

  return (
    <button
      className={classnames("list-group-item list-group-item-action", {
        active: isActive
      })}
      onClick={() => dispatch(selectHeritage({ heritage }))}
    >
      <div>{heritage.name}</div>
      <small>{heritage.description}</small>
    </button>
  );
};
