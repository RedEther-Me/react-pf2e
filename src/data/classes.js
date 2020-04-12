import ABILITIES from "./abilities";
import { TRAINED } from "./proficiencies";
import { ATHLETICS, CRAFTING } from "./skills";

const {
  STRENGTH,
  DEXTERITY,
  CONSTITUTION,
  INTELLIGENCE,
  WISDOM,
  CHARISMA,
} = ABILITIES;

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
};

export default {
  ALCHEMIST,
  [ALCHEMIST]: ALCHEMIST_DATA,

  BARBARIAN,
  [BARBARIAN]: BARBARIAN_DATA,

  list: [ALCHEMIST_DATA, BARBARIAN_DATA],
};
