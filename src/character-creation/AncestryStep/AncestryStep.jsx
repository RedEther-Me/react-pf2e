import React from "react";
import classnames from "classnames";

import { Row, Col } from "../../components";

import AncestrySelection from "./AncestrySelection";
import AncestryAbilityBoosts from "./AncestryAbilityBoosts";

export default props => {
  const { state, dispatch } = props;
  const isAbilityHidden = !state.currentStep.ancestry;

  return (
    <Row>
      <Col>
        <AncestrySelection {...{ state, dispatch }} />
      </Col>
      <Col className={classnames({ "d-none": isAbilityHidden })}>
        <AncestryAbilityBoosts {...{ state, dispatch }} />
      </Col>
    </Row>
  );
};
