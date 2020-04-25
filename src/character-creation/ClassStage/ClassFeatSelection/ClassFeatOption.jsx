import React from "react";

import SelectionOption from "../../../components/SelectionList/SelectionOption";

import { makeSelection } from "../../creationActions";
import { STEP_CLASS_FEAT } from "../../constants";
import { counterSelectionHelper } from "../../utils";

const ClassFeatOption = (props) => {
  const { feat, state, dispatch } = props;

  const { free = 0 } = state.preview.feats;
  const { isSelected, nextFree, value } = counterSelectionHelper({
    itemName: feat.name,
    group: state.choices[STEP_CLASS_FEAT]?.feats,
    currentFree: state.preview.feats?.free?.class,
    fillValue: feat,
  });

  const getLookupAndSubsets = () => {
    return {
      lookup: feat,
    };
  };

  const checkActive = () => {
    return isSelected;
  };

  const onClickCreator = () => () => {
    dispatch(
      makeSelection({
        key: STEP_CLASS_FEAT,
        value: {
          feats: {
            ...value,
            free: {
              ...free,
              class: nextFree,
            },
          },
        },
      })
    );
  };

  return (
    <SelectionOption
      {...{ getLookupAndSubsets, checkActive, onClickCreator }}
    />
  );
};

export default ClassFeatOption;
