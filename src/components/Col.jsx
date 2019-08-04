import React from "react";
import classnames from "classnames";

export default props => {
  const { children, className } = props;

  return <div className={classnames("col", className)}>{children}</div>;
};
