import React from "react";

import AbilityBoostOption from "./AbilityBoostOption";

const AbilityBoost = (props) => {
  const { groups, selected, selectAction } = props;

  return (
    <ul className="list-group">
      {groups.map((group, index) => {
        return (
          <AbilityBoostOption
            key={index}
            {...{ group, selected, index, selectAction }}
          />
        );
      })}
    </ul>
  );
};

export default AbilityBoost;
