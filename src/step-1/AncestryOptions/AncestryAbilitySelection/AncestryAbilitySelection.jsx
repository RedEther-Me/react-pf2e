import React, { useState } from "react";

import { Card, CardHeader, CardBody } from "../../../components";

import AncestryAbilitySelectionOption from "./AncestryAbilitySelectionOption";

export default props => {
  const { state, dispatch, className } = props;
  const { choices, complete } = state;
  const { ancestry } = choices;

  console.log(complete);

  const [isOpen, setOpen] = useState(true);

  const header = (
    <CardHeader
      {...{
        label: "Ability Selection",
        isValid: complete.abilities,
        isOpen,
        setOpen
      }}
    />
  );

  return (
    <Card header={header} className={className}>
      <CardBody {...{ isOpen }}>
        <ul className="list-group">
          {ancestry.boosts.map(boost => {
            return (
              <AncestryAbilitySelectionOption
                key={boost}
                {...{ ancestry, boost, state, dispatch }}
              />
            );
          })}
        </ul>
      </CardBody>
    </Card>
  );
};
