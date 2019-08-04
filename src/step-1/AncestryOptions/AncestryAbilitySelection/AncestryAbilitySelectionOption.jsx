import React from "react";

import { Row, Col, Dropdown } from "../../../components";
import { abilities } from "../../../data";

import { selectAbility } from "../../ancestryActions";

const { list: abilityList, FREE_1, FREE_2 } = abilities;

export default props => {
  const { ancestry, boost, state, dispatch } = props;
  const { choices } = state;
  const { boosts } = choices;

  const currentChoice = boosts[boost] || "FREE";

  const options = abilityList.filter(ability => {
    return (
      !ancestry.boosts.includes(ability) &&
      boosts[FREE_1] !== ability &&
      boosts[FREE_2] !== ability
    );
  });

  const onAbilityClick = selectedAbility => {
    dispatch(selectAbility({ ability: selectedAbility, slot: boost }));
  };

  if (boost !== FREE_1 && boost !== FREE_2) {
    return (
      <li className="list-group-item">
        <Row>
          <Col className="col-2">
            <button className="btn btn-outline-dark btn-sm">
              <i className="fas fa-lock" />
            </button>
          </Col>
          <Col>
            <button className="btn btn-outline-dark btn-sm">{boost}</button>
          </Col>
        </Row>
      </li>
    );
  }

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
            label={currentChoice}
          >
            {options.map(option => (
              <a
                className="dropdown-item"
                key={option}
                onClick={() => onAbilityClick(option)}
              >
                {option}
              </a>
            ))}
          </Dropdown>
        </Col>
      </Row>
    </li>
  );
};
