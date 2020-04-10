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
export const STAGE_HERITAGE_DATA = { name: STAGE_HERITAGE };

export const STAGE_BACKGROUND = "Background";
export const STAGE_BACKGROUND_DATA = { name: STAGE_BACKGROUND };

export const stages = [
  STAGE_ANCESTRY_DATA,
  STAGE_HERITAGE_DATA,
  STAGE_BACKGROUND_DATA,
];

export const defaultAttributes = {
  [STRENGTH]: 10,
  [DEXTERITY]: 10,
  [CONSTITUTION]: 10,
  [INTELLIGENCE]: 10,
  [WISDOM]: 10,
  [CHARISMA]: 10,
};
