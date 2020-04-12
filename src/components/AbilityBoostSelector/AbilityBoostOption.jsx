import React from "react";

import { Row, Col, Dropdown } from "..";

export default (props) => {
  const { group, selected, index, selectAction } = props;

  if (typeof group === "string") {
    return (
      <li className="list-group-item">
        <Row>
          <Col className="col-2">
            <button className="btn btn-outline-dark btn-sm">
              <i className="fas fa-lock" />
            </button>
          </Col>
          <Col>
            <button className="btn btn-outline-dark btn-sm">{group}</button>
          </Col>
        </Row>
      </li>
    );
  }

  const current = selected[index] || "FREE";
  const options = group.filter(
    (ability) =>
      !Object.values({ ...selected, [index]: undefined }).includes(ability)
  );

  return (
    <li className="list-group-item">
      <Row>
        <Col className="col-2">
          <button className="btn btn-outline-dark btn-sm">
            <i className="fas fa-lock-open" />
          </button>
        </Col>
        <Col>
          <Dropdown
            className="btn btn-outline-dark btn-sm dropdown-toggle"
            label={current}
          >
            {options.map((option) => (
              <button
                className="dropdown-item"
                key={option}
                onClick={() => selectAction({ option, index })}
              >
                {option}
              </button>
            ))}
          </Dropdown>
        </Col>
      </Row>
    </li>
  );
};
