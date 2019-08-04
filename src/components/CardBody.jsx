import React from "react";
import classnames from "classnames";

export default props => {
  const { isOpen, children } = props;

  return (
    <div
      className={classnames({
        "d-none": !isOpen
      })}
    >
      {children}
    </div>
  );
};
