import { abilities } from "../data";

const {
  STRENGTH,
  DEXTERITY,
  CONSTITUTION,
  INTELLIGENCE,
  WISDOM,
  CHARISMA,
} = abilities;

export const STAGE_ANCESTRY = "Ancestry";
export const STEP_ANCESTRY_ABILITIES = "Ancestry Ability Boosts";
export const STEP_HERITAGE = "Heritage";
export const STEP_BACKGROUND = "Background";
export const STEP_BACKGROUND_ABILITIES = "Background Ability Boosts";
export const STAGE_ANCESTRY_DATA = {
  name: STAGE_ANCESTRY,
  description: "Ancestry & Background",
  steps: [
    { name: STAGE_ANCESTRY },
    { name: STEP_ANCESTRY_ABILITIES },
    { name: STEP_HERITAGE },
    { name: STEP_BACKGROUND },
    { name: STEP_BACKGROUND_ABILITIES },
  ],
};

export const STAGE_CLASS = "Class";
export const STEP_CLASS_SKILLS = "Class Skills";
export const STAGE_CLASS_DATA = {
  name: STAGE_CLASS,
  description: "Class",
  steps: [{ name: STAGE_CLASS }],
};

export const STAGE_ABILITY_SCORES = "Abilities Scores";
export const STAGE_ABILITY_SCORES_DATA = {
  name: STAGE_ABILITY_SCORES,
  description: "Ability Boosts",
  steps: [{ name: STAGE_ABILITY_SCORES }],
};

export const STAGE_SKILLS = "Skills";
export const STAGE_SKILLS_DATA = {
  name: STAGE_SKILLS,
  description: "Skills",
  steps: [{ name: STAGE_SKILLS }],
};

export const STAGE_EQUIPMENT = "Equipment";
export const STAGE_EQUIPMENT_DATA = {
  name: STAGE_EQUIPMENT,
  description: "Equipment",
  steps: [{ name: STAGE_EQUIPMENT }],
};

export const stages = [
  STAGE_ANCESTRY_DATA,
  STAGE_CLASS_DATA,
  STAGE_ABILITY_SCORES_DATA,
  STAGE_SKILLS_DATA,
  STAGE_EQUIPMENT_DATA,
];

export const stageObj = stages.reduce(
  (acc, stage) => ({ ...acc, [stage.name]: stage }),
  {}
);

export const defaultAttributes = {
  [STRENGTH]: { value: 10, mod: 0 },
  [DEXTERITY]: { value: 10, mod: 0 },
  [CONSTITUTION]: { value: 10, mod: 0 },
  [INTELLIGENCE]: { value: 10, mod: 0 },
  [WISDOM]: { value: 10, mod: 0 },
  [CHARISMA]: { value: 10, mod: 0 },
};
