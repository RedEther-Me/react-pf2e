import React from "react";

import { Card, CardHeader, Row, Col } from "../../../components";
import { SKILL_LIST } from "../../../data/skills";

import SkillsSelectionOption from "./SkillsSelectionOption";

// import { nextStep } from "../../creationActions";
import { STEP_SKILLS } from "../../constants";

const SkillSelection = (props) => {
  const { state, dispatch } = props;

  const freeSkills = state.preview.skills.free;
  const isValid = STEP_SKILLS in state.choices && !freeSkills;

  const header = (
    <CardHeader
      label={`Skill Selection: ${freeSkills} Remain`}
      isValid={isValid}
    />
  );

  return (
    <Card header={header} fullHeight>
      <Row>
        <Col>
          <div className="list-group">
            {SKILL_LIST.map((skill) => {
              return (
                <SkillsSelectionOption
                  {...{ skill, state, dispatch }}
                  key={skill.name}
                />
              );
            })}
          </div>
        </Col>
      </Row>
      {/* <Row className="mt-2">
        <Col>
          <button
            className="btn btn-primary"
            disabled={!isValid}
            onClick={() => dispatch(nextStep({ step: STEP_CLASS_SKILLS }))}
          >
            Continue
          </button>
        </Col>
      </Row> */}
    </Card>
  );
};

export default SkillSelection;
