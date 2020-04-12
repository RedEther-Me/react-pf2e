import React from "react";
import classnames from "classnames";

import { TRAINED } from "../../data/proficiencies";

import { makeSelection } from "../creationActions";
import { STEP_CLASS_SKILLS } from "../constants";

export default (props) => {
  const { skill, state, dispatch } = props;
  const { [skill.name]: curentSkill, free = 0, ...selectedSkills } =
    state.choices[STEP_CLASS_SKILLS]?.skills || {};
  const isTrained = skill.name in state.preview.skills;
  const isSelected = !!curentSkill;

  const onClassClick = () => {
    dispatch(
      makeSelection({
        key: STEP_CLASS_SKILLS,
        value: {
          skills: {
            ...selectedSkills,
            free: isSelected ? free + 1 : free - 1,
            ...(isSelected ? {} : { [skill.name]: TRAINED }),
          },
        },
      })
    );
  };

  return (
    <button
      className={classnames("list-group-item list-group-item-action", {
        active: isSelected,
        "list-group-item-dark": !isSelected && isTrained,
      })}
      onClick={onClassClick}
    >
      {skill.name}
    </button>
  );
};
