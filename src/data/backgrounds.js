import ABILITIES from "./abilities";
import { TRAINED } from "./proficiencies";
import {
  CRAFTING,
  LORE,
  RELIGION,
  SURVIVAL,
  THIEVERY,
  INTIMIDATION,
  SOCIETY,
  ARCANA,
  NATURE,
  OCCULTISM,
} from "./skills";
import {
  FEAT_ASSURANCE_WILD,
  FEAT_COURTLY_GRACES,
  FEAT_FORAGER,
  FEAT_INTIMIDATING_GLARE,
  FEAT_PICKPOCKET,
  FEAT_SPECIALTY_CRAFTING,
  FEAT_STUDENT_OF_THE_CANNON,
} from "./feats";

const {
  STRENGTH,
  DEXTERITY,
  CONSTITUTION,
  INTELLIGENCE,
  WISDOM,
  CHARISMA,
} = ABILITIES;

export const ACOLYTE = "ACOLYTE";
export const ACOLYTE_DATA = {
  name: ACOLYTE,
  description:
    "You spent your early days in a religious monastery or cloister. You may have traveled out into the world to spread the message of your religion or because you cast away the teachings of your faith, but deep down you’ll always carry within you the lessons you learned. Choose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost. You’re trained in the Religion skill and the Scribing Lore skill. You gain the Student of the Canon skill feat.",
  ability_boosts: [
    [INTELLIGENCE, WISDOM],
    [STRENGTH, DEXTERITY, CONSTITUTION, INTELLIGENCE, WISDOM, CHARISMA],
  ],
  skills: {
    [RELIGION]: TRAINED,
    [LORE]: { Scribe: TRAINED },
  },
  feats: [FEAT_STUDENT_OF_THE_CANNON],
};

export const NOBLE = "NOBLE";
export const NOBLE_DATA = {
  name: NOBLE,
  description:
    "To the common folk, the life of a noble seems one of idyllic luxury, but growing up as a noble or member of the aspiring gentry, you know the reality: a noble’s lot is obligation and intrigue. Whether you seek to escape your duties by adventuring or to better your station, you have traded silks and pageantry for an adventurer’s life. Choose two ability boosts. One must be to Intelligence or Charisma, and one is a free ability boost. You’re trained in the Society skill and your choice of the Genealogy Lore or Heraldry Lore skill. You gain the Courtly Graces skill feat",
  ability_boosts: [
    [INTELLIGENCE, CHARISMA],
    [STRENGTH, DEXTERITY, CONSTITUTION, INTELLIGENCE, WISDOM, CHARISMA],
  ],
  skills: {
    [SOCIETY]: TRAINED,
  },
  pick_skill: [[LORE, ["Genealogy", "Heraldry"]]],
  feats: [FEAT_COURTLY_GRACES],
};

export const SCHOLAR = "SCHOLAR";
export const SCHOLAR_DATA = {
  name: SCHOLAR,
  description:
    "You have a knack for learning, and sequestered yourself from the outside world to learn all you could. You read about so many wondrous places and things in your books, and always dreamed about one day seeing the real things. Eventually, that curiosity led you to leave your studies and become an adventurer. Choose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost. You’re trained in your choice of the Arcana, Nature, Occultism, or Religion skill, and gain the Assurance skill feat in your chosen skill. You’re also trained in the Academia Lore skill. ",
  ability_boosts: [
    [INTELLIGENCE, WISDOM],
    [STRENGTH, DEXTERITY, CONSTITUTION, INTELLIGENCE, WISDOM, CHARISMA],
  ],
  skills: {
    [LORE]: { Academia: TRAINED },
  },
  pick_skill: [[ARCANA], [NATURE], [OCCULTISM], [RELIGION]],
  pick_feats: [FEAT_ASSURANCE_WILD],
};

export const SCOUT = "SCOUT";
export const SCOUT_DATA = {
  name: SCOUT,
  description:
    "You called the wilderness home as you found trails and guided travelers. Your wanderlust could have called you to the adventuring life, or perhaps you served as a scout for soldiers and found you liked battle. Choose two ability boosts. One must be to Dexterity or Wisdom, and one is a free ability boost. You’re trained in the Survival skill and a Lore skill related to one terrain you scouted in (such as Forest Lore or Cavern Lore). You gain the Forager skill feat.",
  ability_boosts: [
    [DEXTERITY, WISDOM],
    [STRENGTH, DEXTERITY, CONSTITUTION, INTELLIGENCE, WISDOM, CHARISMA],
  ],
  skills: {
    [SURVIVAL]: TRAINED,
  },
  pick_skill: [[LORE, ["Forest", "Cavern"]]],
  feats: [FEAT_FORAGER],
};

export const STREET_URCHIN = "STREET_URCHIN";
export const STREET_URCHIN_DATA = {
  name: STREET_URCHIN,
  description:
    "You eked out a living by picking pockets on the streets of a major city, never knowing where you’d find your next meal. While some folk adventure for the glory, you do so to survive.  Choose two ability boosts. One must be to Dexterity or Constitution, and one is a free ability boost. You’re trained in Thievery and a Lore skill for the city you lived in as a street urchin (such as Absalom Lore or Magnimar Lore). You gain the Pickpocket skill feat.",
  ability_boosts: [
    [DEXTERITY, CONSTITUTION],
    [STRENGTH, DEXTERITY, CONSTITUTION, INTELLIGENCE, WISDOM, CHARISMA],
  ],
  skills: {
    [THIEVERY]: TRAINED,
  },
  pick_skill: [[LORE, ["Absalom", "Magnimar"]]],
  feats: [FEAT_PICKPOCKET],
};

export const TINKER = "TINKER";
export const TINKER_DATA = {
  name: TINKER,
  description:
    "Creating all sorts of minor inventions scratches your itch for problem-solving. Your engineering skills take a particularly creative bent, and no one know what you’ll come up with next. It might be a genius device with tremendous potential... or it might explode. Choose two ability boosts. One must be to Dexterity or Intelligence, and one is a free ability boost. You’re trained in the Crafting skill and the Engineering Lore skill. You gain the Specialty Crafting skill feat.",
  ability_boosts: [
    [DEXTERITY, INTELLIGENCE],
    [STRENGTH, DEXTERITY, CONSTITUTION, INTELLIGENCE, WISDOM, CHARISMA],
  ],
  skills: {
    [CRAFTING]: TRAINED,
    [LORE]: { Engineering: TRAINED },
  },
  feats: [FEAT_SPECIALTY_CRAFTING],
};

export const WARRIOR = "WARRIOR";
export const WARRIOR_DATA = {
  name: WARRIOR,
  description:
    "In your younger days, you waded into battle as a mercenary, a warrior defending a nomadic people, or a member of a militia or army. You might have wanted to break out from the regimented structure of these forces, or you could have always been as independent a warrior as you are now. Choose two ability boosts. One must be to Strength or Constitution, and one is a free ability boost. You’re trained in the Intimidation skill and the Warfare Lore skill. You gain the Intimidating Glare skill feat.",
  ability_boosts: [
    [STRENGTH, CONSTITUTION],
    [STRENGTH, DEXTERITY, CONSTITUTION, INTELLIGENCE, WISDOM, CHARISMA],
  ],
  skills: {
    [INTIMIDATION]: TRAINED,
    [LORE]: { Warfare: TRAINED },
  },
  feats: [FEAT_INTIMIDATING_GLARE],
};

export const BACKGROUND_LIST = [
  ACOLYTE_DATA,
  NOBLE_DATA,
  SCHOLAR_DATA,
  SCOUT_DATA,
  STREET_URCHIN_DATA,
  TINKER_DATA,
  WARRIOR_DATA,
];

export const BACKGROUND_MAP = BACKGROUND_LIST.reduce(
  (acc, background) => ({ ...acc, [background.name]: background }),
  {}
);
