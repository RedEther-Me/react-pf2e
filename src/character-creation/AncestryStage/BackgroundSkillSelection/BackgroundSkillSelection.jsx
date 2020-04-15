import React from "react";

import { Card, CardHeader, Row, Col } from "../../../components";

import BackgroundSkillSelectionOption from "./BackgroundSkillSelectionOption";

import { nextStep } from "../../creationActions";
import { STEP_BACKGROUND, STEP_BACKGROUND_SKILL } from "../../constants";

const BackgroundSkillSelection = (props) => {
  const { state, dispatch } = props;

  const { pick_skill } = state.choices[STEP_BACKGROUND];

  const isValid = STEP_BACKGROUND_SKILL in state.choices;

  const header = (
    <CardHeader label="Background Skill Selection" isValid={isValid} />
  );

  return (
    <Card header={header} fullHeight>
      <Row>
        <Col>
          <div className="list-group">
            {pick_skill.map((skill) => {
              return (
                <BackgroundSkillSelectionOption
                  {...{ skill, state, dispatch }}
                  key={skill[0]}
                />
              );
            })}
          </div>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <button
            className="btn btn-primary"
            disabled={!isValid}
            onClick={() => dispatch(nextStep({}))}
          >
            Continue
          </button>
        </Col>
      </Row>
    </Card>
  );
};

export default BackgroundSkillSelection;
