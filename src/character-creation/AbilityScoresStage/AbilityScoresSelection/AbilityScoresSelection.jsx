import React from "react";

import { Card, CardHeader, AbilityBoostSelector } from "../../../components";
import abilities from "../../../data/abilities";

import { STEP_ABILITY_SCORES } from "../../constants";
import { makeSelection } from "../../creationActions";

const {
  STRENGTH,
  DEXTERITY,
  CONSTITUTION,
  INTELLIGENCE,
  WISDOM,
  CHARISMA,
} = abilities;

const singleGroup = [
  STRENGTH,
  DEXTERITY,
  CONSTITUTION,
  INTELLIGENCE,
  WISDOM,
  CHARISMA,
];

const groups = [singleGroup, singleGroup, singleGroup, singleGroup];

export default (props) => {
  const { state, dispatch } = props;

  const { [STEP_ABILITY_SCORES]: selected = {} } = state.choices;

  const isValid = groups.every((group, index) => {
    return typeof group === "string" || index in selected;
  });

  const selectAction = ({ option, index }) =>
    dispatch(
      makeSelection({
        key: STEP_ABILITY_SCORES,
        value: { ...selected, [index]: option },
      })
    );

  const header = <CardHeader label="Free Ability Boosts" isValid={isValid} />;

  return (
    <Card header={header} fullHeight>
      <AbilityBoostSelector {...{ groups, selected, selectAction }} />
    </Card>
  );
};
