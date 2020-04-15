import React from "react";
import classnames from "classnames";

const CardBody = (props) => {
  const { isOpen, children } = props;

  return (
    <div
      className={classnames({
        "d-none": !isOpen,
      })}
    >
      {children}
    </div>
  );
};

export default CardBody;
