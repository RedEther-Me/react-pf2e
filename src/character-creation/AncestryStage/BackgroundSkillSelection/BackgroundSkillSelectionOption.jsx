import React from "react";
import classnames from "classnames";

import { TRAINED } from "../../../data/proficiencies";
import { SKILL_MAP } from "../../../data/skills";

import { makeSelection } from "../../creationActions";
import { STEP_BACKGROUND_SKILL } from "../../constants";

const BackgroundSkillSelectionOption = (props) => {
  const { skill, state, dispatch } = props;
  const lookup = SKILL_MAP[skill[0]];

  const isActive =
    lookup.name in (state.choices[STEP_BACKGROUND_SKILL]?.skills || {});

  const onBackgroundClick = () => {
    dispatch(
      makeSelection({
        key: STEP_BACKGROUND_SKILL,
        value: { skills: { [lookup.name]: TRAINED } },
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
      {lookup.name}
    </button>
  );
};

export default BackgroundSkillSelectionOption;
