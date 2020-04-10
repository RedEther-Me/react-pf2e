import ABILITIES from "./abilities";

const {
  STRENGTH,
  DEXTERITY,
  CONSTITUTION,
  INTELLIGENCE,
  WISDOM,
  CHARISMA,
} = ABILITIES;

const DWARF = "dwarf";
const DWARF_DATA = {
  name: DWARF,
  ability_boosts: [
    CONSTITUTION,
    WISDOM,
    [STRENGTH, DEXTERITY, INTELLIGENCE, CHARISMA],
  ],
  ability_flaw: CHARISMA,
  heritages: {},
};

const ELF = "elf";
const ELF_DATA = {
  name: ELF,
  ability_boosts: [
    DEXTERITY,
    INTELLIGENCE,
    [STRENGTH, CONSTITUTION, WISDOM, CHARISMA],
  ],
  ability_flaw: CONSTITUTION,
  heritages: {},
};

const GNOME = "gnome";
const GNOME_DATA = {
  name: GNOME,
  ability_boosts: [
    CONSTITUTION,
    CHARISMA,
    [STRENGTH, DEXTERITY, INTELLIGENCE, WISDOM],
  ],
  ability_flaw: STRENGTH,
  heritages: {},
};

const GOBLIN = "goblin";
const GOBLIN_DATA = {
  name: GOBLIN,
  ability_boosts: [
    DEXTERITY,
    CHARISMA,
    [STRENGTH, CONSTITUTION, INTELLIGENCE, WISDOM],
  ],
  ability_flaw: WISDOM,
  state: {
    hit_points: 6,
    size: "s",
    speed: 25,
  },
  heritages: {
    charhide_goblin: {
      name: "Charhide Goblin",
      description:
        "Your ancestors have always had a connection to fire and a thicker skin, which allows you to resist burning. You gain fire resistance equal to half your level (minimum 1). You can also recover from being on fire more easily. Your flat check to remove persistent fire damage is DC 10 instead of DC 15, which is reduced to DC 5 if another creature uses a particularly appropriate action to help.",
    },
    irongut_goblin: {
      name: "Irongut Goblin",
      description:
        "You can subsist on food that most folks would consider spoiled. You can keep yourself fed with poor meals in a settlement as long as garbage is readily available, without using the Subsist downtime activity. You can eat and drink things when you are sickened. You gain a +2 circumstance bonus to saving throws against afflictions, against gaining the sickened condition, and to remove the sickened condition. When you roll a success on a Fortitude save affected by this bonus, you get a critical success instead. All these benefits apply only when the affliction or condition resulted from something you ingested.",
    },
    razortooth_goblin: {
      name: "Razortooth Goblin",
      description:
        "Your family’s teeth are formidable weapons. You gain a jaws unarmed attack that deals 1d6 piercing damage. Your jaws are in the brawling group and have the finesse and unarmed traits",
    },
    snow_goblin: {
      name: "Snow Goblin",
      description:
        "You are acclimated to living in frigid lands and have skin ranging from sky blue to navy in color, as well as blue fur. You gain cold resistance equal to half your level (minimum 1). You treat environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).",
    },
    unbreakable_goblin: {
      name: "Unbreakable Goblin",
      description:
        "You’re able to bounce back from injuries easily due to an exceptionally thick skull, cartilaginous bones, or some other mixed blessing. You gain 10 Hit Points from your ancestry instead of 6. When you fall, reduce the falling damage you take as though you had fallen half the distance.",
      state: {
        hit_points: 10,
      },
    },
  },
};

const HALFLING = "halfling";
const HALFLING_DATA = {
  name: HALFLING,
  ability_boosts: [
    DEXTERITY,
    WISDOM,
    [STRENGTH, CONSTITUTION, INTELLIGENCE, CHARISMA],
  ],
  ability_flaw: STRENGTH,
  heritages: {},
};

const HUMAN = "human";
const HUMAN_DATA = {
  name: HUMAN,
  ability_boosts: [
    [STRENGTH, DEXTERITY, CONSTITUTION, INTELLIGENCE, WISDOM, CHARISMA],
    [STRENGTH, DEXTERITY, CONSTITUTION, INTELLIGENCE, WISDOM, CHARISMA],
  ],
  heritages: {},
};

export default {
  DWARF,
  [DWARF]: DWARF_DATA,

  ELF,
  [ELF]: ELF_DATA,

  GNOME,
  [GNOME]: GNOME_DATA,

  GOBLIN,
  [GOBLIN]: GOBLIN_DATA,

  HALFLING,
  [HALFLING]: HALFLING_DATA,

  HUMAN,
  [HUMAN]: HUMAN_DATA,

  list: [
    DWARF_DATA,
    ELF_DATA,
    GNOME_DATA,
    GOBLIN_DATA,
    HALFLING_DATA,
    HUMAN_DATA,
  ],
};
