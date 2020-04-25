import React from "react";

import { Card, CardHeader, Row, Col } from "../../../components";
import { FEAT_LIST } from "../../../data/feats";

import ClassFeatOption from "./ClassFeatOption";

import { nextStep } from "../../creationActions";
import { STEP_CLASS_FEAT, STEP_CLASS_SELECTION } from "../../constants";

const filterFeats = (state) => {
  return (feat) => {
    const { requirements } = feat;

    // Level
    if ("level" in requirements) {
      const { level } = state.preview;
      if (level < requirements.level) return false;
    }
    // Class
    if ("class" in requirements) {
      const { name: className } = state.choices[STEP_CLASS_SELECTION];

      if (className !== requirements.class) return false;
    }
    // Previous Feats

    return true;
  };
};

const ClassFeatSelection = (props) => {
  const { state, dispatch } = props;

  const isValid = state.preview.feats.free.class === 0;

  const header = <CardHeader label="Class Feats" isValid={isValid} />;

  const validFeats = FEAT_LIST.filter(filterFeats(state));

  return (
    <Card header={header} fullHeight>
      <Row>
        <Col>
          <div className="list-group">
            {validFeats.map((feat) => {
              return (
                <ClassFeatOption
                  {...{ feat, state, dispatch }}
                  key={feat.name}
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

export default ClassFeatSelection;
