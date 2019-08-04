import React from "react";
import classnames from "classnames";

export default props => {
  const { background } = props;

  const isActive = false;
  const onBackgroundClick = () => {};

  return (
    <button
      className={classnames("list-group-item list-group-item-action", {
        active: isActive
      })}
      onClick={onBackgroundClick}
    >
      <div>{background.name}</div>
      <small>{background.description}</small>
    </button>
  );
};
