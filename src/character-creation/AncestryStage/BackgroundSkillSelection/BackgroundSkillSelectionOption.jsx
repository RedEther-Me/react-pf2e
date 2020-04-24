import React from "react";

import { SKILL_MAP } from "../../../data/skills";
import { TRAINED } from "../../../data/proficiencies";

import { STEP_BACKGROUND_SKILL } from "../../constants";
import { makeSelection } from "../../creationActions";

import SelectionOption from "../../../components/SelectionList/SelectionOption";

const BackgroundSkillSelectionOption = (props) => {
  const { skill, state, dispatch } = props;

  const getLookupAndSubsets = () => {
    const [skillName, subsets] = skill;

    const lookup = SKILL_MAP[skillName];
    return { lookup, subsets };
  };

  const checkActive = (lookup, subset) => {
    if (subset) {
      const { skills = {} } = state.choices[STEP_BACKGROUND_SKILL] || {};
      return lookup.name in skills && subset in skills[lookup.name];
    }

    return lookup.name in (state.choices[STEP_BACKGROUND_SKILL]?.skills || {});
  };

  const onClickCreator = (lookup, subset) => () => {
    if (subset) {
      dispatch(
        makeSelection({
          key: STEP_BACKGROUND_SKILL,
          value: { skills: { [lookup.name]: { [subset]: TRAINED } } },
        })
      );

      return;
    }

    dispatch(
      makeSelection({
        key: STEP_BACKGROUND_SKILL,
        value: { skills: { [lookup.name]: TRAINED } },
      })
    );
  };

  return (
    <SelectionOption
      {...{ getLookupAndSubsets, checkActive, onClickCreator }}
    />
  );
};

export default BackgroundSkillSelectionOption;
