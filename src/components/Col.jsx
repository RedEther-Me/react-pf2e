import React from "react";
import classnames from "classnames";

const Col = (props) => {
  const { children, className } = props;

  return <div className={classnames("col", className)}>{children}</div>;
};

export default Col;
