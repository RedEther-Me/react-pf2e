import React from "react";

import OptionMulti from "./OptionMulti";
import OptionSingle from "./OptionSingle";

const Option = (props) => {
  const { getLookupAndSubsets, checkActive, onClickCreator } = props;

  const { lookup, subsets } = getLookupAndSubsets();

  if (subsets) {
    return subsets.map((subset) => (
      <OptionMulti
        {...{ lookup, subset, checkActive, onClickCreator }}
        key={subset}
      />
    ));
  }

  return <OptionSingle {...{ lookup, checkActive, onClickCreator }} />;
};

export default Option;
