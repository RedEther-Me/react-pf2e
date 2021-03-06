import ABILITIES from "./abilities";

const {
  STRENGTH,
  DEXTERITY,
  CONSTITUTION,
  INTELLIGENCE,
  WISDOM,
  CHARISMA,
  FREE_1,
  FREE_2
} = ABILITIES;

const ACOLYTE = "ACOLYTE";
const ACOLYTE_DATA = {
  name: ACOLYTE,
  description:
    "You spent your early days in a religious monastery or cloister. You may have traveled out into the world to spread the message of your religion or because you cast away the teachings of your faith, but deep down you’ll always carry within you the lessons you learned. Choose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost. You’re trained in the Religion skill and the Scribing Lore skill. You gain the Student of the Canon skill feat.",
  boosts: [[INTELLIGENCE, WISDOM], FREE_1]
};

const TINKER = "TINKER";
const TINKER_DATA = {
  name: TINKER,
  description:
    "Creating all sorts of minor inventions scratches your itch for problem-solving. Your engineering skills take a particularly creative bent, and no one know what you’ll come up with next. It might be a genius device with tremendous potential... or it might explode. Choose two ability boosts. One must be to Dexterity or Intelligence, and one is a free ability boost. You’re trained in the Crafting skill and the Engineering Lore skill. You gain the Specialty Crafting skill feat.",
  boosts: [[DEXTERITY, INTELLIGENCE], FREE_1]
};

export default {
  ACOLYTE,
  [ACOLYTE]: ACOLYTE_DATA,

  TINKER,
  [TINKER]: TINKER_DATA,

  list: [ACOLYTE_DATA, TINKER_DATA]
};
