import React from "react";

import { Card, AbilityBoostSelector } from "../../../components";

import { selectAbilityBoost } from "../../creationActions";

export default props => {
  const { state, dispatch } = props;

  const { ancestry, ability_boosts } = state.currentStep;
  const groups = ancestry ? ancestry.ability_boosts : [];
  const selected = ability_boosts ? ability_boosts : {};

  const selectAction = ({ option, index }) =>
    dispatch(selectAbilityBoost({ option, index }));

  return (
    <Card>
      <AbilityBoostSelector {...{ groups, selected, selectAction }} />
    </Card>
  );
};
