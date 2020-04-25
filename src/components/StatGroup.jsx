import React from "react";

const StatGroup = (props) => {
  const { label, values } = props;

  return (
    <ul className="list-group list-group-horizontal">
      <li className="list-group-item list-group-item-primary">{label}</li>
      {values.map((value, index) => (
        <li key={`${index}_${value}`} className="list-group-item">
          {value}
        </li>
      ))}
    </ul>
  );
};

export default StatGroup;
