import React from "react";

const Pill = (props) => {
  const { label } = props;

  return <span className="badge badge-pill badge-secondary mr-1">{label}</span>;
};

export default Pill;
