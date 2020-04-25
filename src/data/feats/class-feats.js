import { additionalTraits } from "../utils";
import {
  BARBARIAN,
  FIGHTER,
  CONCENTRATE,
  RAGE,
  FLOURISH,
  OPEN,
} from "../traits";
import { CLASS_BARBARIAN, CLASS_FIGHTER, CLASS_MAP } from "../classes";
import {
  ACTION_MOMENT_OF_CLARITY,
  ACTION_MOMENT_OF_CLARITY_DATA,
  ACTION_SUDDEN_CHARGE,
  ACTION_SUDDEN_CHARGE_DATA,
  ACTION_POWER_ATTACK,
  ACTION_POWER_ATTACK_DATA,
} from "../actions";

export const CLASS_FEAT = "CLASS_FEAT";

export const FEAT_BARBARIAN_VISION = "FEAT_BARBARIAN_VISION";
const FEAT_BARBARIAN_VISION_DATA = [
  {
    name: FEAT_BARBARIAN_VISION,
    title: "Barbarian Vision",
    type: CLASS_FEAT,
    traits: [BARBARIAN],
    requirements: {
      level: 1,
      class: CLASS_BARBARIAN,
    },
  },
];

export const FEAT_MOMENT_OF_CLARITY = "FEAT_MOMENT_OF_CLARITY";
const FEAT_MOMENT_OF_CLARITY_DATA = [
  {
    name: FEAT_MOMENT_OF_CLARITY,
    title: "Moment of Clarity",
    type: CLASS_FEAT,
    traits: [BARBARIAN, CONCENTRATE, RAGE],
    requirements: {
      level: 1,
      class: CLASS_BARBARIAN,
    },
    actions: {
      [ACTION_MOMENT_OF_CLARITY]: ACTION_MOMENT_OF_CLARITY_DATA,
    },
  },
];

export const FEAT_RAGING_INTIMIDATION = "FEAT_RAGING_INTIMIDATION";
const FEAT_RAGING_INTIMIDATION_DATA = [
  {
    name: FEAT_RAGING_INTIMIDATION,
    title: "Raging Intimidation",
    type: CLASS_FEAT,
    traits: [BARBARIAN],
    requirements: {
      level: 1,
      class: CLASS_BARBARIAN,
    },
  },
];

export const FEAT_RAGING_THROWER = "FEAT_RAGING_THROWER";
const FEAT_RAGING_THROWER_DATA = [
  {
    name: FEAT_RAGING_THROWER,
    title: "Raging Thrower",
    type: CLASS_FEAT,
    traits: [BARBARIAN],
    requirements: {
      level: 1,
      class: CLASS_BARBARIAN,
    },
  },
];

export const FEAT_SUDDEN_CHARGE_BARBARIAN = "FEAT_SUDDEN_CHARGE_BARBARIAN";
export const FEAT_SUDDEN_CHARGE_FIGHTER = "FEAT_SUDDEN_CHARGE_FIGHTER";
const FEAT_SUDDEN_CHARGE_DATA = [BARBARIAN, FIGHTER].map((className) => {
  const { name } = CLASS_MAP[`CLASS_${className}`];
  return {
    name: `FEAT_SUDDEN_CHARGE_${className}`,
    title: "Sudden Charge",
    type: CLASS_FEAT,
    traits: [className, FLOURISH, OPEN],
    requirements: {
      level: 1,
      class: name,
    },
    actions: {
      [ACTION_SUDDEN_CHARGE]: additionalTraits(ACTION_SUDDEN_CHARGE_DATA, [
        className,
      ]),
    },
  };
});

export const FEAT_POWER_ATTACK = "FEAT_POWER_ATTACK";
const FEAT_POWER_ATTACK_DATA = [
  {
    name: FEAT_POWER_ATTACK,
    title: "Power Attack",
    type: CLASS_FEAT,
    traits: [FIGHTER, FLOURISH],
    requirements: {
      level: 1,
      class: CLASS_FIGHTER,
    },
    actions: {
      [ACTION_POWER_ATTACK]: additionalTraits(ACTION_POWER_ATTACK_DATA, [
        FIGHTER,
      ]),
    },
  },
];

export const FEAT_LIST = [
  ...FEAT_BARBARIAN_VISION_DATA,
  ...FEAT_MOMENT_OF_CLARITY_DATA,
  ...FEAT_RAGING_INTIMIDATION_DATA,
  ...FEAT_RAGING_THROWER_DATA,
  ...FEAT_SUDDEN_CHARGE_DATA,
  ...FEAT_POWER_ATTACK_DATA,
];
