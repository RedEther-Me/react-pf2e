import React from "react";

import { SKILL_MAP } from "../../../../data/skills";

import BackgroundSkillSelectionOptionMulti from "./BackgroundSkillSelectionOptionMulti";
import BackgroundSkillSelectionOptionSingle from "./BackgroundSkillSelectionOptionSingle";

const BackgroundSkillSelectionOption = (props) => {
  const { skill, state, dispatch } = props;
  const [skillName, subsets] = skill;

  const lookup = SKILL_MAP[skillName];

  if (subsets) {
    return subsets.map((subset) => (
      <BackgroundSkillSelectionOptionMulti
        {...{ skill, state, dispatch, lookup, subset }}
      />
    ));
  }

  return (
    <BackgroundSkillSelectionOptionSingle
      {...{ skill, state, dispatch, lookup }}
    />
  );
};

export default BackgroundSkillSelectionOption;
