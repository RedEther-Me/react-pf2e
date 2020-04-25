import { TRAINED } from "../proficiencies";
import {
  RELIGION,
  SOCIETY,
  SURVIVAL,
  THIEVERY,
  CRAFTING,
  INTIMIDATION,
  SKILL_LIST,
} from "../skills";
import { GENERAL, SKILL, FORTUNE } from "../traits";

export const SKILL_FEAT = "SKILL_FEAT";

export const FEAT_ASSURANCE_WILD = "FEAT_ASSURANCE_";
const FEAT_ASSURANCE_DATA = SKILL_LIST.map((skill) => ({
  name: `FEAT_ASSURANCE_${skill.name}`,
  title: `Assurance [${skill.name}]`,
  type: SKILL_FEAT,
  traits: [GENERAL, SKILL, FORTUNE],
  requirements: {
    skills: {
      [skill.name]: TRAINED,
    },
  },
}));

export const FEAT_COURTLY_GRACES = "FEAT_COURTLY_GRACES";
const FEAT_COURTLY_GRACES_DATA = [
  {
    name: FEAT_COURTLY_GRACES,
    title: "Courtly Graces",
    type: SKILL_FEAT,
    traits: [GENERAL, SKILL],
    requirements: {
      skills: {
        [SOCIETY]: TRAINED,
      },
    },
  },
];

export const FEAT_FORAGER = "FEAT_FORAGER";
const FEAT_FORAGER_DATA = [
  {
    name: FEAT_FORAGER,
    title: "Forager",
    type: SKILL_FEAT,
    traits: [GENERAL, SKILL],
    requirements: {
      skills: {
        [SURVIVAL]: TRAINED,
      },
    },
  },
];

export const FEAT_INTIMIDATING_GLARE = "FEAT_INTIMIDATING_GLARE";
const FEAT_INTIMIDATING_GLARE_DATA = [
  {
    name: FEAT_INTIMIDATING_GLARE,
    title: "Intimidating Glare",
    type: SKILL_FEAT,
    traits: [GENERAL, SKILL],
    requirements: {
      skills: {
        [INTIMIDATION]: TRAINED,
      },
    },
  },
];

export const FEAT_PICKPOCKET = "FEAT_PICKPOCKET";
const FEAT_PICKPOCKET_DATA = [
  {
    name: FEAT_PICKPOCKET,
    title: "Pickpocket",
    type: SKILL_FEAT,
    traits: [GENERAL, SKILL],
    requirements: {
      skills: {
        [THIEVERY]: TRAINED,
      },
    },
  },
];

export const FEAT_SPECIALTY_CRAFTING = "FEAT_SPECIALTY_CRAFTING";
const FEAT_SPECIALTY_CRAFTING_DATA = [
  {
    name: FEAT_SPECIALTY_CRAFTING,
    title: "Specialty Crafting",
    type: SKILL_FEAT,
    traits: [GENERAL, SKILL],
    requirements: {
      skills: {
        [CRAFTING]: TRAINED,
      },
    },
  },
];

export const FEAT_STUDENT_OF_THE_CANNON = "FEAT_STUDENT_OF_THE_CANNON";
const FEAT_STUDENT_OF_THE_CANNON_DATA = [
  {
    name: FEAT_STUDENT_OF_THE_CANNON,
    title: "Student of the Cannon",
    type: SKILL_FEAT,
    traits: [GENERAL, SKILL],
    requirements: {
      skills: {
        [RELIGION]: TRAINED,
      },
    },
  },
];

export const FEAT_LIST = [
  ...FEAT_ASSURANCE_DATA,
  ...FEAT_COURTLY_GRACES_DATA,
  ...FEAT_FORAGER_DATA,
  ...FEAT_INTIMIDATING_GLARE_DATA,
  ...FEAT_PICKPOCKET_DATA,
  ...FEAT_SPECIALTY_CRAFTING_DATA,
  ...FEAT_STUDENT_OF_THE_CANNON_DATA,
];
