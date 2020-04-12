import React from "react";

import { Card, CardHeader, AbilityBoostSelector } from "../../../components";

import { makeSelection } from "../../creationActions";
import { STEP_BACKGROUND, STEP_BACKGROUND_ABILITIES } from "../../constants";

export default (props) => {
  const { state, dispatch } = props;

  const {
    [STEP_BACKGROUND]: background,
    [STEP_BACKGROUND_ABILITIES]: ability_boosts,
  } = state.choices;
  const groups = background ? background.ability_boosts : [];
  const selected = ability_boosts ? ability_boosts : {};

  const isValid = groups.every((group, index) => {
    return typeof group === "string" || index in selected;
  });

  const header = (
    <CardHeader label="Background Ability Boosts" isValid={isValid} />
  );

  const selectAction = ({ option, index }) =>
    dispatch(
      makeSelection({
        key: STEP_BACKGROUND_ABILITIES,
        value: { ...ability_boosts, [index]: option },
      })
    );

  return (
    <Card header={header} fullHeight>
      <AbilityBoostSelector {...{ groups, selected, selectAction }} />
    </Card>
  );
};
