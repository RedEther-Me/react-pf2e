import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

export default ({ to, className, ...props }) => {
  if (props.disabled) {
    return (
      <button className={classnames(className, "disabled")} {...props}>
        {props.children}
      </button>
    );
  }

  return (
    <Link to={to}>
      <button className={className} {...props}>
        {props.children}
      </button>
    </Link>
  );
};
