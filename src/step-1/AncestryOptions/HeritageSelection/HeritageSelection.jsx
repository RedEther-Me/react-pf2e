import React, { useState } from "react";

import { Card, CardHeader, CardBody } from "../../../components";

import HeritageSelectionOption from "./HeritageSelectionOption";

export default props => {
  const { state, dispatch, className } = props;
  const { choices } = state;
  const { ancestry, heritage } = choices;

  const isValid = !!heritage;
  const [isOpen, setOpen] = useState(true);

  const header = (
    <CardHeader
      {...{ label: "Heritage Selection", isValid, isOpen, setOpen }}
    />
  );

  return (
    <Card header={header} className={className}>
      <CardBody isOpen={isOpen}>
        <div className="list-group">
          {Object.keys(ancestry.heritages).map(heritage => {
            return (
              <HeritageSelectionOption
                key={heritage}
                {...{
                  heritage: ancestry.heritages[heritage],
                  state,
                  dispatch
                }}
              />
            );
          })}
        </div>
      </CardBody>
    </Card>
  );
};
