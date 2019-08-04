import React, { useReducer } from "react";

import { Card, SelectionLayout } from "../components";

import AncestrySelection from "./AncestrySelection";
import AncestryOptions from "./AncestryOptions";

import ancestryReducer, { initialState } from "./ancestryReducer";

export default props => {
  const [state, dispatch] = useReducer(ancestryReducer, initialState);

  const firstColumn = <AncestrySelection {...{ state, dispatch }} />;
  const secondColumn = <AncestryOptions {...{ state, dispatch }} />;

  return (
    <SelectionLayout {...{ firstColumn, secondColumn }}>
      <Card fullHeight>{JSON.stringify(state ? state.state : undefined)}</Card>
    </SelectionLayout>
  );
};
