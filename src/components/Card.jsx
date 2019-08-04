import React from "react";
import classnames from "classnames";

export default props => {
  const { header, children, fullHeight, className } = props;

  return (
    <div
      className={classnames(
        "card",
        { "card-full-height": fullHeight },
        className
      )}
    >
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
    </div>
  );
};
