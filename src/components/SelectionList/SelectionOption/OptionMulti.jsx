import React from "react";
import classnames from "classnames";

const OptionMulti = (props) => {
  const { lookup, subset, checkActive, onClickCreator } = props;

  return (
    <button
      className={classnames("list-group-item list-group-item-action", {
        active: checkActive(lookup, subset),
      })}
      onClick={onClickCreator(lookup, subset)}
    >
      {lookup.name} - {subset}
    </button>
  );
};

export default OptionMulti;
