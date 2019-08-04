import React from "react";

import AncestryAbilitySelection from "./AncestryAbilitySelection";
import HeritageSelection from "./HeritageSelection";
import AncestryFeatSelection from "./AncestryFeatSelection";

export default props => {
  const { state, dispatch } = props;

  if (!state || !state.choices || !state.choices.ancestry) {
    return null;
  }

  const abilitySelection = (
    <AncestryAbilitySelection
      className="multi-option-column-item"
      key="ability-selection"
      {...{ state, dispatch }}
    />
  );
  const heritageSelection = (
    <HeritageSelection
      className="multi-option-column-item"
      key="heritage-selection"
      {...{ state, dispatch }}
    />
  );
  const featSelection = (
    <AncestryFeatSelection
      className="multi-option-column-item"
      key="feat-selection"
      {...{ state, dispatch }}
    />
  );

  return [abilitySelection, heritageSelection, featSelection];
};
