import { abilities } from "../data";

const {
  STRENGTH,
  DEXTERITY,
  CONSTITUTION,
  INTELLIGENCE,
  WISDOM,
  CHARISMA,
} = abilities;

const createStep = (opts) => ({
  enabled: false,
  visible: true,
  ...opts,
});

export const STAGE_ANCESTRY = "1-Ancestry";
export const STEP_SELECT_ANCESTRY = "Select Ancestry";
export const STEP_ANCESTRY_ABILITIES = "Ancestry Ability Boosts";
export const STEP_HERITAGE = "Heritage";
export const STEP_BACKGROUND = "Background";
export const STEP_BACKGROUND_SKILL = "Background Skill Options";
export const STEP_BACKGROUND_ABILITIES = "Background Ability Boosts";
export const STAGE_ANCESTRY_DATA = {
  name: STAGE_ANCESTRY,
  description: "Ancestry & Background",
  enabled: true,
  active: true,
  steps: [
    createStep({ name: STEP_SELECT_ANCESTRY, enabled: true }),
    createStep({ name: STEP_ANCESTRY_ABILITIES }),
    createStep({ name: STEP_HERITAGE }),
    createStep({ name: STEP_BACKGROUND }),
    createStep({ name: STEP_BACKGROUND_SKILL, visible: false }),
    createStep({ name: STEP_BACKGROUND_ABILITIES }),
  ],
};

export const STAGE_CLASS = "2-Class";
export const STEP_CLASS_SELECTION = "Select Class";
export const STEP_CLASS_SUB_SELECTION = "-- Sub Class";
export const STEP_CLASS_FEAT = "Class Feats";
export const STAGE_CLASS_DATA = {
  name: STAGE_CLASS,
  description: "Class",
  steps: [
    createStep({ name: STEP_CLASS_SELECTION }),
    createStep({ name: STEP_CLASS_SUB_SELECTION, visible: false }),
    createStep({ name: STEP_CLASS_FEAT, visible: false }),
  ],
};

export const STAGE_ABILITY_SCORES = "3-Abilities Scores";
export const STEP_ABILITY_SCORES = "Select Ability Boosts";
export const STAGE_ABILITY_SCORES_DATA = {
  name: STAGE_ABILITY_SCORES,
  description: "Ability Boosts",
  steps: [createStep({ name: STEP_ABILITY_SCORES })],
};

export const STAGE_SKILLS = "4-Skills";
export const STEP_SKILLS = "Select Skills";
export const STAGE_SKILLS_DATA = {
  name: STAGE_SKILLS,
  description: "Skills",
  steps: [createStep({ name: STEP_SKILLS })],
};

export const STAGE_EQUIPMENT = "5-Equipment";
export const STAGE_EQUIPMENT_DATA = {
  name: STAGE_EQUIPMENT,
  description: "Equipment",
  steps: [createStep({ name: STAGE_EQUIPMENT })],
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
  skills: {
    free: 0,
  },
  feats: {
    free: {},
  },
  level: 1,
};
