import React from "react";

import { Card, CardHeader, AbilityBoostSelector } from "../../../components";

import { makeSelection } from "../../creationActions";
import { STAGE_ANCESTRY, STEP_ANCESTRY_ABILITIES } from "../../creationReducer";

export default (props) => {
  const { state, dispatch } = props;

  const {
    [STAGE_ANCESTRY]: ancestry,
    [STEP_ANCESTRY_ABILITIES]: ability_boosts,
  } = state.choices;
  const groups = ancestry ? ancestry.ability_boosts : [];
  const selected = ability_boosts ? ability_boosts : {};

  const isValid = groups.every((group, index) => {
    return typeof group === "string" || index in selected;
  });

  const header = (
    <CardHeader label="Ancestry Ability Boosts" isValid={isValid} />
  );

  const selectAction = ({ option, index }) =>
    dispatch(
      makeSelection({
        key: STEP_ANCESTRY_ABILITIES,
        value: { [index]: option },
      })
    );

  return (
    <Card header={header} fullHeight>
      <AbilityBoostSelector {...{ groups, selected, selectAction }} />
    </Card>
  );
};
