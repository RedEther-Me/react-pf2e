import React from "react";
import classnames from "classnames";

const Row = (props) => {
  const { children, className } = props;

  return <div className={classnames("row", className)}>{children}</div>;
};

export default Row;
