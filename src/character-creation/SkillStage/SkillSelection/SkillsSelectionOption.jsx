import React from "react";
import classnames from "classnames";

import { TRAINED } from "../../../data/proficiencies";

import { makeSelection } from "../../creationActions";
import { STAGE_SKILLS } from "../../constants";
import { counterSelectionHelper } from "../../utils";

const SkillSelectionOption = (props) => {
  const { skill, state, dispatch } = props;
  const isTrained = skill.name in state.preview.skills;

  const { isSelected, nextFree, value } = counterSelectionHelper({
    itemName: skill.name,
    group: state.choices[STAGE_SKILLS]?.skills,
    currentFree: state.choices[STAGE_SKILLS]?.skills?.free,
    fillValue: TRAINED,
  });

  const onClassClick = () => {
    dispatch(
      makeSelection({
        key: STAGE_SKILLS,
        value: {
          skills: { ...value, nextFree },
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

export default SkillSelectionOption;
