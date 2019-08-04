import React, { useReducer } from "react";

import { Card, SelectionLayout } from "../components";

import BackgroundSelection from "./BackgroundSelection";

import backgroundReducer from "./backgroundReducer";

export default props => {
  const initialState = props.location.state;
  console.log(initialState);
  const [state, dispatch] = useReducer(backgroundReducer, initialState);

  // const secondColumn = <AncestryOptions {...{ state, dispatch }} />;

  const firstColumn = <BackgroundSelection {...{ state, dispatch }} />;
  const secondColumn = null;

  return (
    <SelectionLayout {...{ firstColumn, secondColumn, sizes: [4, 2, 6] }}>
      <Card fullHeight>{JSON.stringify()}</Card>
    </SelectionLayout>
  );
};
