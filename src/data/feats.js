import { additionalTraits } from "./utils";
import {
  BARBARIAN,
  FIGHTER,
  CONCENTRATE,
  RAGE,
  FLOURISH,
  OPEN,
} from "./traits";
import { CLASS_BARBARIAN, CLASS_FIGHTER, CLASS_MAP } from "./classes";
import {
  ACTION_MOMENT_OF_CLARITY,
  ACTION_MOMENT_OF_CLARITY_DATA,
  ACTION_SUDDEN_CHARGE,
  ACTION_SUDDEN_CHARGE_DATA,
  ACTION_POWER_ATTACK,
  ACTION_POWER_ATTACK_DATA,
} from "./actions";

const FEAT_BARBARIAN_VISION = [
  {
    name: "Barbarian Vision",
    triats: [BARBARIAN],
    requirements: {
      level: 1,
      class: CLASS_BARBARIAN,
    },
  },
];

const FEAT_MOMENT_OF_CLARITY = [
  {
    name: "Moment of Clarity",
    triats: [BARBARIAN, CONCENTRATE, RAGE],
    requirements: {
      level: 1,
      class: CLASS_BARBARIAN,
    },
    actions: {
      [ACTION_MOMENT_OF_CLARITY]: ACTION_MOMENT_OF_CLARITY_DATA,
    },
  },
];

const FEAT_RAGING_INTIMIDATION = [
  {
    name: "Raging Intimidation",
    triats: [BARBARIAN],
    requirements: {
      level: 1,
      class: CLASS_BARBARIAN,
    },
  },
];

const FEAT_RAGING_THROWER = [
  {
    name: "Raging Thrower",
    triats: [BARBARIAN],
    requirements: {
      level: 1,
      class: CLASS_BARBARIAN,
    },
  },
];

const FEAT_SUDDEN_CHARGE = [BARBARIAN, FIGHTER].map((className) => {
  const { name } = CLASS_MAP[`CLASS_${className}`];
  return {
    name: "Sudden Charge",
    triats: [className, FLOURISH, OPEN],
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

const FEAT_POWER_ATTACK = [
  {
    name: "Power Attack",
    triats: [FIGHTER, FLOURISH],
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
  ...FEAT_BARBARIAN_VISION,
  ...FEAT_MOMENT_OF_CLARITY,
  ...FEAT_RAGING_INTIMIDATION,
  ...FEAT_RAGING_THROWER,
  ...FEAT_SUDDEN_CHARGE,
  ...FEAT_POWER_ATTACK,
];
