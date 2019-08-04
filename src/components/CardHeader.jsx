import React from "react";
import classnames from "classnames";

export default props => {
  const { label, isValid, isOpen, setOpen } = props;

  return (
    <div className="d-flex w-100 justify-content-between">
      <h5>{label}</h5>
      <div className="d-flex justify-content-between">
        <button
          className={classnames("btn btn-outline-dark btn-sm mr-2", {
            "d-none": !isValid
          })}
        >
          <i className="fas fa-check" />
        </button>
        <button
          className={classnames("btn btn-outline-dark btn-sm", {
            "d-none": !setOpen || isOpen
          })}
          onClick={() => setOpen && setOpen(true)}
        >
          <i className="fas fa-chevron-right" />
        </button>
        <button
          className={classnames("btn btn-outline-dark btn-sm", {
            "d-none": !setOpen || !isOpen
          })}
          onClick={() => setOpen && setOpen(false)}
        >
          <i className="fas fa-chevron-down" />
        </button>
      </div>
    </div>
  );
};
