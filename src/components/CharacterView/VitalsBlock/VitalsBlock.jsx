import React, { Fragment } from "react";

import StatGroup from "../../StatGroup";

const VitalsBlock = (props) => {
  const { state } = props;

  return (
    <Fragment>
      <StatGroup label="HP" values={[state.preview.hit_points]} />
    </Fragment>
  );
};

export default VitalsBlock;
