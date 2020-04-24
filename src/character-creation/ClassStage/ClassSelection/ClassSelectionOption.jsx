import React from "react";

import SelectionOption from "../../../components/SelectionList/SelectionOption";

import { makeSelection, makeMultiSelection } from "../../creationActions";
import {
  STEP_CLASS_SELECTION,
  STEP_CLASS_SUB_SELECTIOIN,
} from "../../constants";

export default (props) => {
  const { classType, state, dispatch } = props;

  const getLookupAndSubsets = () => {
    return {
      lookup: classType,
      subsets: classType.subclasses?.map((sub) => sub.name),
    };
  };

  const checkActive = (lookup, subset) => {
    const isClass = lookup.name === state.choices[STEP_CLASS_SELECTION]?.name;
    if (subset) {
      const isSubClass =
        subset === state.choices[STEP_CLASS_SUB_SELECTIOIN]?.name;
      return isClass && isSubClass;
    }

    return isClass;
  };

  const onClickCreator = (lookup, subset) => () => {
    if (subset) {
      const found = lookup.subclasses.find(
        (subclass) => subclass.name === subset
      );
      dispatch(
        makeMultiSelection({
          selections: [
            { key: STEP_CLASS_SELECTION, value: lookup },
            { key: STEP_CLASS_SUB_SELECTIOIN, value: found },
          ],
        })
      );

      return;
    }

    dispatch(makeSelection({ key: STEP_CLASS_SELECTION, value: lookup }));
  };

  return (
    <SelectionOption
      {...{ getLookupAndSubsets, checkActive, onClickCreator }}
    />
  );
};
