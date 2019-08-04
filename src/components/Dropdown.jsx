import React, { useState, useEffect } from "react";
import classnames from "classnames";

export default props => {
  const { children, label, className } = props;

  const [show, setShow] = useState(false);

  useEffect(() => {
    const clickElseWhere = () => {
      setShow(false);
    };

    document.addEventListener("click", clickElseWhere, true);
    return () => {
      document.removeEventListener("click", clickElseWhere, true);
    };
  }, []);

  return (
    <div className="dropdown">
      <button
        className={classnames("dropdown-toggle", className)}
        onClick={() => setShow(!show)}
      >
        {label}
      </button>
      <div className={classnames("dropdown-menu", { show })}>{children}</div>
    </div>
  );
};
