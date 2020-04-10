import React from "react";

import { Row, Col } from "../../components";

import AncestrySelection from "./AncestrySelection";
import AncestryAbilityBoosts from "./AncestryAbilityBoosts";
import { STAGE_ANCESTRY, STEP_ANCESTRY_ABILITIES } from "../creationReducer";

const mapComponent = ({ state, dispatch }) => {
  switch (state.currentStep) {
    case STAGE_ANCESTRY: {
      return <AncestrySelection {...{ state, dispatch }} />;
    }
    case STEP_ANCESTRY_ABILITIES: {
      return <AncestryAbilityBoosts {...{ state, dispatch }} />;
    }
    default:
      return null;
  }
};

const AncestryStep = (props) => {
  return mapComponent(props);
};

export default AncestryStep;
