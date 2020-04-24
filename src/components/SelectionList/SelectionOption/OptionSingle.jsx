import React from "react";
import classnames from "classnames";

const OptionSingle = (props) => {
  const { lookup, checkActive, onClickCreator } = props;

  return (
    <button
      className={classnames("list-group-item list-group-item-action", {
        active: checkActive(lookup),
      })}
      onClick={onClickCreator(lookup)}
    >
      {lookup.name}
    </button>
  );
};

export default OptionSingle;
