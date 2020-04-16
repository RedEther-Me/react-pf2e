import React from "react";
import classnames from "classnames";

import { TRAINED } from "../../../../data/proficiencies";

import { makeSelection } from "../../../creationActions";
import { STEP_BACKGROUND_SKILL } from "../../../constants";

const BackgroundSkillSelectionOptionMulti = (props) => {
  const { state, dispatch, lookup, subset } = props;

  const { skills = {} } = state.choices[STEP_BACKGROUND_SKILL] || {};
  const isActive = lookup.name in skills && subset in skills[lookup.name];

  const onBackgroundClick = () => {
    dispatch(
      makeSelection({
        key: STEP_BACKGROUND_SKILL,
        value: { skills: { [lookup.name]: { [subset]: TRAINED } } },
      })
    );
  };

  return (
    <button
      className={classnames("list-group-item list-group-item-action", {
        active: isActive,
      })}
      onClick={onBackgroundClick}
    >
      {lookup.name} - {subset}
    </button>
  );
};

export default BackgroundSkillSelectionOptionMulti;
