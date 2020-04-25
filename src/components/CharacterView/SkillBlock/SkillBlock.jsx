import React, { Fragment } from "react";

import { SKILL_LIST } from "../../../data/skills";

const SkillBlock = (props) => {
  const { state } = props;
  const { skills } = state.preview;
  return (
    <table className="table">
      <tbody>
        {SKILL_LIST.filter((skill) => skill.name in skills).map((skill) => {
          const prof = skills[skill.name];

          if (typeof prof === "string") {
            return (
              <tr key={skill.name}>
                <td colSpan={2} className="table-primary">
                  {skill.title || skill.name}
                </td>
                <td>{prof}</td>
              </tr>
            );
          }

          // const { sub, level } = prof;
          const subs = Object.entries(prof);

          return (
            <Fragment>
              <tr key={skill.name}>
                <td colSpan={2} className="table-primary">
                  {skill.title || skill.name}
                </td>
              </tr>
              {subs.map(([sub, sub_prof]) => (
                <tr key={`${skill.name}_${sub}`}>
                  <td></td>
                  <td>{sub}</td>
                  <td>{sub_prof}</td>
                </tr>
              ))}
            </Fragment>
          );
        })}
      </tbody>
    </table>
  );
};

export default SkillBlock;
