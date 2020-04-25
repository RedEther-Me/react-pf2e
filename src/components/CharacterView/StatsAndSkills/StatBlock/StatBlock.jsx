import React from "react";

import { ABILITY_LIST } from "../../../../data/abilities";

const StatBlock = (props) => {
  const { state } = props;
  return (
    <table className="table">
      <tbody>
        {ABILITY_LIST.map((ability) => {
          const lookup = state.preview[ability.name];
          return (
            <tr key={ability.name}>
              <td className="table-primary">{ability.short}</td>
              <td>{lookup.value}</td>
              <td>{lookup.mod >= 0 ? `+${lookup.mod}` : lookup.mod}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StatBlock;
