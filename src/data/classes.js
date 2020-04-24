import ABILITIES from "./abilities";
import { TRAINED } from "./proficiencies";
import { MORPH, PRIMAL, TRANSMUTATION } from "./traits";
import { ATHLETICS, CRAFTING } from "./skills";
import { RAGE, RAGE_DATA } from "./actions";
import {
  FEATURE_RAGE_DATA,
  FEATURE_ANATHEMA,
  FEATURE_ANATHEMA_DATA,
  FEATURE_CLASS_FEAT,
  FEATURE_CLASS_FEAT_DATA,
  FEATURE_INSTINCT_DATA,
  FEATURE_INSTINCT_ABILITY,
  FEATURE_INSTINCT_ABILITY_DATA,
  FEATURE_SKILL_FEAT_DATA,
  FEATURE_DENY_ADVANTAGE_DATA,
  FEATURE_GENERAL_FEAT_DATA,
  FEATURE_SKILL_INCREASE_DATA,
  FEATURE_ABILITY_BOOST_DATA,
  FEATURE_ANCESTRY_FEAT_DATA,
  FEATURE_BRUTALITY_DATA,
  FEATURE_JUGGERNAUT_DATA,
  FEATURE_WEAPON_SPECIALIZATION,
  FEATURE_WEAPON_SPECIALIZATION_DATA,
  FEATURE_GREATER_WEAPON_SPECIALIZATION,
  FEATURE_GREATER_WEAPON_SPECIALIZATION_DATA,
  FEATURE_RAGING_RESISTANCE,
  FEATURE_RAGING_RESISTANCE_DATA,
} from "./features";

const {
  STRENGTH,
  DEXTERITY,
  CONSTITUTION,
  INTELLIGENCE,
  WISDOM,
  CHARISMA,
} = ABILITIES;

export const REMOVE = "REMOVE";
export const ALTER = "ALTER";
export const BONUS = "BONUS";

const ALCHEMIST = "ALCHEMIST";
const ALCHEMIST_DATA = {
  name: ALCHEMIST,
  description: "You're an alchemist",
  ability_boosts: [INTELLIGENCE],
  skills: {
    [CRAFTING]: TRAINED,
    free: 3,
  },
};

const BARBARIAN = "BARBARIAN";
const BARBARIAN_DATA = {
  name: BARBARIAN,
  description: "You're a barbarian",
  ability_boosts: [STRENGTH],
  skills: {
    [ATHLETICS]: TRAINED,
    free: 3,
  },
  featureMap: {
    1: [
      FEATURE_ANATHEMA_DATA,
      FEATURE_RAGE_DATA,
      FEATURE_INSTINCT_DATA,
      FEATURE_INSTINCT_ABILITY_DATA,
      FEATURE_CLASS_FEAT_DATA,
    ],
    2: [FEATURE_CLASS_FEAT_DATA, FEATURE_SKILL_FEAT_DATA],
    3: [
      FEATURE_DENY_ADVANTAGE_DATA,
      FEATURE_GENERAL_FEAT_DATA,
      FEATURE_SKILL_INCREASE_DATA,
    ],
    4: [FEATURE_CLASS_FEAT_DATA, FEATURE_SKILL_FEAT_DATA],
    5: [
      FEATURE_ABILITY_BOOST_DATA,
      FEATURE_ANCESTRY_FEAT_DATA,
      FEATURE_BRUTALITY_DATA,
      FEATURE_SKILL_INCREASE_DATA,
    ],
    6: [FEATURE_CLASS_FEAT_DATA, FEATURE_SKILL_FEAT_DATA],
    7: [
      FEATURE_GENERAL_FEAT_DATA,
      FEATURE_JUGGERNAUT_DATA,
      FEATURE_SKILL_INCREASE_DATA,
      FEATURE_WEAPON_SPECIALIZATION_DATA,
    ],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
    13: [],
    14: [],
    15: [],
    16: [],
    17: [],
    18: [],
    19: [],
    20: [],
  },
  subclasses: [
    {
      name: "Animal Instinct",
      alts: [
        {
          level: 1,
          type: FEATURE_ANATHEMA,
          text:
            "Flagrent disrespecting an animal of your chosen kind is anathema to your instinct, as is using weapons while raging",
          action: ALTER,
        },
        {
          level: 1,
          type: FEATURE_INSTINCT_ABILITY,
          name: "Bestial Rage",
          actions: {
            [RAGE]: {
              ...RAGE_DATA,
              traits: [...RAGE_DATA.traits, MORPH, PRIMAL, TRANSMUTATION],
            },
          },
          action: ALTER,
        },
        {
          level: 7,
          type: FEATURE_WEAPON_SPECIALIZATION,
          text:
            "Increase the damage die size for the unarmed attacks granted by your chosen animal by one step, and increase the additional damage from Rage from 2 to 5 for your chosen animal’s unarmed attacks.The frog’s tongue attack and deer’s antler attack gain reach 10 feet",
          action: ALTER,
        },
        {
          level: 15,
          type: FEATURE_GREATER_WEAPON_SPECIALIZATION,
          text:
            "Increase the damage from Rage from 5 to 12 for your chosen animal’s unarmed attacks.",
          action: ALTER,
        },
        {
          level: 9,
          type: FEATURE_RAGING_RESISTANCE,
          text: "You resist piercing and slashing damage.",
          action: ALTER,
        },
      ],
    },
    { name: "Dragon Instinct" },
    {
      name: "Fury Instinct",
      alts: [
        {
          level: 1,
          type: FEATURE_ANATHEMA,
          text: "You don’t have an anathema or an instinct ability.",
          action: ALTER,
        },
        {
          level: 1,
          type: FEATURE_INSTINCT_ABILITY,
          action: REMOVE,
        },
        { type: FEATURE_CLASS_FEAT, action: BONUS },
        {
          level: 7,
          type: FEATURE_WEAPON_SPECIALIZATION,
          text: "Increase the additional damage from Rage from 2 to 6.",
          action: ALTER,
        },
        {
          level: 15,
          type: FEATURE_GREATER_WEAPON_SPECIALIZATION,
          text: "Increase the additional damage from Rage to 12.",
          action: ALTER,
        },
        {
          level: 9,
          type: FEATURE_RAGING_RESISTANCE,
          text:
            "You resist physical weapon damage, but not physical damage from other sources (such as unarmed attacks).",
          action: ALTER,
        },
      ],
    },
    { name: "Giant Instinct" },
    { name: "Spirit Instinct" },
  ],
};

const CLASS_LIST = [ALCHEMIST_DATA, BARBARIAN_DATA];

export default {
  ALCHEMIST,
  [ALCHEMIST]: ALCHEMIST_DATA,

  BARBARIAN,
  [BARBARIAN]: BARBARIAN_DATA,

  list: CLASS_LIST,
};

export const CLASS_MAP = CLASS_LIST.reduce(
  (acc, classType) => ({ ...acc, [classType.name]: classType }),
  {}
);
