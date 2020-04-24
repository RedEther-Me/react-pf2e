import React from "react";

import Card from "../Card";

const CharacterView = (props) => {
  const { state } = props;

  return <Card fullHeight>{JSON.stringify(state.preview)}</Card>;
};

export default CharacterView;
