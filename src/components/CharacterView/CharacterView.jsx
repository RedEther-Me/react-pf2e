import React, { useState } from "react";
import classnames from "classnames";

import Card from "../Card";

import StatsAndSkills from "./StatsAndSkills";
import FeaturesAndFeats from "./FeaturesAndFeats";
import ActionsBlock from "./ActionsBlock";

const STATS_AND_SKILLS = "Stats & Skills";
const FEATURES_AND_FEATS = "Class Features & Feats";
const ACTIONS = "Actions";
const INVENTORY = "Inventory";

const SECTIONS = [STATS_AND_SKILLS, FEATURES_AND_FEATS, ACTIONS, INVENTORY];
const COMPONENTS = [
  [STATS_AND_SKILLS, StatsAndSkills],
  [FEATURES_AND_FEATS, FeaturesAndFeats],
  [ACTIONS, ActionsBlock],
];

const CharacterView = (props) => {
  const { state } = props;
  console.log(state.preview);

  const [active, setActive] = useState(STATS_AND_SKILLS);

  return (
    <Card fullHeight>
      <nav>
        <div className="list-group list-group-horizontal mb-4">
          {SECTIONS.map((section) => (
            <button
              key={section}
              className={classnames(
                "list-group-item flex-fill list-group-item-primary",
                {
                  active: active === section,
                }
              )}
              onClick={() => setActive(section)}
            >
              {section}
            </button>
          ))}
        </div>
      </nav>

      {COMPONENTS.map(([section, Component]) => (
        <div
          className={classnames({ "d-none": active !== section })}
          key={`VIEW_${section}`}
        >
          <Component {...{ state }} />
        </div>
      ))}
    </Card>
  );
};

export default CharacterView;
