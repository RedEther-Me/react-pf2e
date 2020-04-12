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
export const STAGE_ANCESTRY_DATA = {
  name: STAGE_ANCESTRY,
  steps: [{ name: STAGE_ANCESTRY }, { name: STEP_ANCESTRY_ABILITIES }],
};

export const STAGE_HERITAGE = "Heritage";
export const STAGE_HERITAGE_DATA = {
  name: STAGE_HERITAGE,
  steps: [{ name: STAGE_HERITAGE }],
};

export const STAGE_BACKGROUND = "Background";
export const STEP_BACKGROUND_ABILITIES = "Background Ability Boosts";
export const STAGE_BACKGROUND_DATA = {
  name: STAGE_BACKGROUND,
  steps: [{ name: STAGE_BACKGROUND }, { name: STEP_BACKGROUND_ABILITIES }],
};

export const STAGE_CLASS = "Class";
export const STEP_CLASS_SKILLS = "Class Skills";
export const STAGE_CLASS_DATA = {
  name: STAGE_CLASS,
  steps: [{ name: STAGE_CLASS }, { name: STEP_CLASS_SKILLS }],
};

export const STAGE_ABILITIES = "Free Abilities";
export const STAGE_ABILITIES_DATA = {
  name: STAGE_ABILITIES,
  steps: [{ name: STAGE_ABILITIES }],
};

export const STAGE_EQUIPMENT = "Equipment";
export const STAGE_EQUIPMENT_DATA = {
  name: STAGE_EQUIPMENT,
  steps: [{ name: STAGE_EQUIPMENT }],
};

export const stages = [
  STAGE_ANCESTRY_DATA,
  STAGE_HERITAGE_DATA,
  STAGE_BACKGROUND_DATA,
  STAGE_CLASS_DATA,
  STAGE_ABILITIES_DATA,
  STAGE_EQUIPMENT_DATA,
];

export const stageObj = stages.reduce(
  (acc, stage) => ({ ...acc, [stage.name]: stage }),
  {}
);

export const defaultAttributes = {
  [STRENGTH]: 10,
  [DEXTERITY]: 10,
  [CONSTITUTION]: 10,
  [INTELLIGENCE]: 10,
  [WISDOM]: 10,
  [CHARISMA]: 10,
};
