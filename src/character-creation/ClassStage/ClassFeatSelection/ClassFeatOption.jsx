import React from "react";

import SelectionOption from "../../../components/SelectionList/SelectionOption";

import { makeSelection } from "../../creationActions";
import { STEP_CLASS_FEAT } from "../../constants";

const ClassFeatOption = (props) => {
  const { feat, state, dispatch } = props;

  const getLookupAndSubsets = () => {
    return {
      lookup: feat,
    };
  };

  const checkActive = (lookup) => {
    return lookup.name === state.choices[STEP_CLASS_FEAT]?.name;
  };

  const onClickCreator = (lookup) => () => {
    dispatch(makeSelection({ key: STEP_CLASS_FEAT, value: lookup }));
  };

  return (
    <SelectionOption
      {...{ getLookupAndSubsets, checkActive, onClickCreator }}
    />
  );
};

export default ClassFeatOption;
