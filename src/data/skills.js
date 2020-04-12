import ABILITIES from "./abilities";

import {
  BALANCE,
  BORROW_AN_ACRCANE_SPELL,
  CLIMB,
  CRAFT,
  DECIPHER_WRITING,
  DISARM,
  EARN_INCOME,
  FORCE_OPEN,
  GRAPPLE,
  HIGH_JUMP,
  IDENTIFY_ALCHEMY,
  IDENTIFY_MAGIC,
  LEARN_A_SPELL,
  LONG_JUMP,
  MANEUVER_IN_FLIGHT,
  RECALL_KNOWLEDGE,
  REPAIR,
  SHOVE,
  SQUEEZE,
  SWIM,
  TRIP,
  TUMBLE_THROUGH,
  CREATE_A_DIVERSION,
  IMPERSONATE,
  LIE,
  FEINT,
  COERCE,
  DEMORALIZE,
  ADMINISTER_FIRST_AID,
  TREATE_DISEASE,
  TREAT_POISON,
  TREAT_WOUNDS,
  COMMAND_AN_ANIMAL,
  PERFORM,
  SUBSIST,
  CREATE_FORGERY,
  CONCEAL_AN_OBJECT,
  HIDE,
  SNEAK,
  SENSE_DIRECTION,
  COVER_TRACKS,
  TRACK,
  PALM_AN_OBJECT,
  STEAL,
  DISABLE_A_DEVICE,
  PICK_A_LOCK,
  GATHER_INFORMATION,
  MAKE_AN_IMPRESSION,
  REQUEST,
} from "./actions";

const { STRENGTH, DEXTERITY, INTELLIGENCE, WISDOM, CHARISMA } = ABILITIES;

export const ACROBATICS = "ACROBATICS";
export const ACROBATICS_DATA = {
  name: ACROBATICS,
  key_ability: DEXTERITY,
  untrained_actions: [BALANCE, TUMBLE_THROUGH],
  trained_actions: [MANEUVER_IN_FLIGHT, SQUEEZE],
};

export const ARCANA = "ARCANA";
export const ARCANA_DATA = {
  name: ARCANA,
  key_ability: INTELLIGENCE,
  untrained_actions: [RECALL_KNOWLEDGE],
  trained_actions: [
    BORROW_AN_ACRCANE_SPELL,
    DECIPHER_WRITING,
    IDENTIFY_MAGIC,
    LEARN_A_SPELL,
  ],
};

export const ATHLETICS = "ATHLETICS";
export const ATHLETICS_DATA = {
  name: ATHLETICS,
  key_ability: STRENGTH,
  untrained_actions: [
    CLIMB,
    FORCE_OPEN,
    GRAPPLE,
    HIGH_JUMP,
    LONG_JUMP,
    SHOVE,
    SWIM,
    TRIP,
  ],
  trained_actions: [DISARM],
};

export const CRAFTING = "CRAFTING";
export const CRAFTING_DATA = {
  name: CRAFTING,
  key_ability: INTELLIGENCE,
  untrained_actions: [RECALL_KNOWLEDGE, REPAIR],
  trained_actions: [CRAFT, EARN_INCOME, IDENTIFY_ALCHEMY],
};

export const DECEPTION = "DECEPTION";
export const DECEPTION_DATA = {
  name: DECEPTION,
  key_ability: CHARISMA,
  untrained_actions: [CREATE_A_DIVERSION, IMPERSONATE, LIE],
  trained_actions: [FEINT],
};

export const DIPLOMACY = "DIPLOMACY";
export const DIPLOMACY_DATA = {
  name: DIPLOMACY,
  key_ability: CHARISMA,
  untrained_actions: [GATHER_INFORMATION, MAKE_AN_IMPRESSION, REQUEST],
  trained_actions: [],
};

export const INTIMIDATION = "INTIMIDATION";
export const INTIMIDATION_DATA = {
  name: INTIMIDATION,
  key_ability: CHARISMA,
  untrained_actions: [COERCE, DEMORALIZE],
  trained_actions: [],
};

export const LORE = "LORE";
export const LORE_DATA = {
  name: LORE,
  key_ability: INTELLIGENCE,
  untrained_actions: [RECALL_KNOWLEDGE],
  trained_actions: [EARN_INCOME],
  hasSubtypes: true,
};

export const MEDICINE = "MEDICINE";
export const MEDICINE_DATA = {
  name: MEDICINE,
  key_ability: WISDOM,
  untrained_actions: [ADMINISTER_FIRST_AID, RECALL_KNOWLEDGE],
  trained_actions: [TREATE_DISEASE, TREAT_POISON, TREAT_WOUNDS],
};

export const NATURE = "NATURE";
export const NATURE_DATA = {
  name: NATURE,
  key_ability: WISDOM,
  untrained_actions: [COMMAND_AN_ANIMAL, RECALL_KNOWLEDGE],
  trained_actions: [IDENTIFY_MAGIC, LEARN_A_SPELL],
};

export const OCCULTISM = "OCCULTISM";
export const OCCULTISM_DATA = {
  name: OCCULTISM,
  key_ability: INTELLIGENCE,
  untrained_actions: [RECALL_KNOWLEDGE],
  trained_actions: [DECIPHER_WRITING, IDENTIFY_MAGIC, LEARN_A_SPELL],
};

export const PERFORMANCE = "PERFORMANCE";
export const PERFORMANCE_DATA = {
  name: PERFORMANCE,
  key_ability: CHARISMA,
  untrained_actions: [PERFORM],
  trained_actions: [EARN_INCOME],
};

export const RELIGION = "RELIGION";
export const RELIGION_DATA = {
  name: RELIGION,
  key_ability: WISDOM,
  untrained_actions: [RECALL_KNOWLEDGE],
  trained_actions: [DECIPHER_WRITING, IDENTIFY_MAGIC, LEARN_A_SPELL],
};

export const SOCIETY = "SOCIETY";
export const SOCIETY_DATA = {
  name: SOCIETY,
  key_ability: INTELLIGENCE,
  untrained_actions: [RECALL_KNOWLEDGE, SUBSIST],
  trained_actions: [CREATE_FORGERY, DECIPHER_WRITING],
};

export const STEALTH = "STEALTH";
export const STEALTH_DATA = {
  name: STEALTH,
  key_ability: DEXTERITY,
  untrained_actions: [CONCEAL_AN_OBJECT, HIDE, SNEAK],
  trained_actions: [],
};

export const SURVIVAL = "SURVIVAL";
export const SURVIVAL_DATA = {
  name: SURVIVAL,
  key_ability: WISDOM,
  untrained_actions: [SENSE_DIRECTION, SUBSIST],
  trained_actions: [COVER_TRACKS, TRACK],
};

export const THIEVERY = "THIEVERY";
export const THIEVERY_DATA = {
  name: THIEVERY,
  key_ability: DEXTERITY,
  untrained_actions: [PALM_AN_OBJECT, STEAL],
  trained_actions: [DISABLE_A_DEVICE, PICK_A_LOCK],
};

export const SKILL_LIST = [
  ACROBATICS_DATA,
  ARCANA_DATA,
  ATHLETICS_DATA,
  CRAFTING_DATA,
  DECEPTION_DATA,
  DIPLOMACY_DATA,
  INTIMIDATION_DATA,
  LORE_DATA,
  MEDICINE_DATA,
  NATURE_DATA,
  OCCULTISM_DATA,
  PERFORMANCE_DATA,
  RELIGION_DATA,
  SOCIETY_DATA,
  STEALTH_DATA,
  SURVIVAL_DATA,
  THIEVERY_DATA,
];

export const SKILL_MAP = SKILL_LIST.reduce(
  (acc, skill) => ({ ...acc, [skill.name]: skill }),
  {}
);
