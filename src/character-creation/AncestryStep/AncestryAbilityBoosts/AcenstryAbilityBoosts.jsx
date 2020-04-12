import React from "react";

import {
  Card,
  CardHeader,
  Row,
  Col,
  AbilityBoostSelector,
} from "../../../components";

import { makeSelection, nextStep } from "../../creationActions";
import {
  STAGE_ANCESTRY,
  STEP_ANCESTRY_ABILITIES,
  STEP_HERITAGE,
} from "../../creationReducer";

export default (props) => {
  const { state, dispatch } = props;

  const {
    [STAGE_ANCESTRY]: ancestry,
    [STEP_ANCESTRY_ABILITIES]: selected = {},
  } = state.choices;
  const groups = ancestry ? ancestry.ability_boosts : [];

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
        value: { ...selected, [index]: option },
      })
    );

  return (
    <Card header={header} fullHeight>
      <AbilityBoostSelector {...{ groups, selected, selectAction }} />
      <Row className="mt-2">
        <Col>
          <button
            className="btn btn-primary"
            disabled={!isValid}
            onClick={() => dispatch(nextStep({ step: STEP_HERITAGE }))}
          >
            Continue
          </button>
        </Col>
      </Row>
    </Card>
  );
};
