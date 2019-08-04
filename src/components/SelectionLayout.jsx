import React from "react";
import classnames from "classnames";

export default ({ firstColumn, secondColumn, children, sizes = [2, 4, 6] }) => {
  return (
    <div className="row">
      <div className={classnames({ [`col-${sizes[0]}`]: true })}>
        {firstColumn}
      </div>
      <div className={classnames({ [`col-${sizes[1]}`]: true })}>
        {secondColumn}
      </div>
      <div className={classnames({ [`col-${sizes[2]}`]: true })}>
        {children}
      </div>
    </div>
  );
};
