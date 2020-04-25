import {
  BARBARIAN,
  CONCENTRATE,
  EMOTION,
  MENTAL,
  RAGE,
  FLOURISH,
  OPEN,
} from "./traits";

export const ACTION_BORROW_AN_ACRCANE_SPELL = "BORROW_AN_ACRCANE_SPELL";
export const ACTION_BORROW_AN_ACRCANE_SPELL_DATA = {};
export const ACTION_CREATE_A_DIVERSION = "CREATE_A_DIVERSION";
export const ACTION_CREATE_A_DIVERSION_DATA = {};
export const ACTION_IMPERSONATE = "IMPERSONATE";
export const ACTION_IMPERSONATE_DATA = {};
export const ACTION_LIE = "LIE";
export const ACTION_LIE_DATA = {};
export const ACTION_FEINT = "FEINT";
export const ACTION_FEINT_DATA = {};
export const ACTION_COERCE = "COERCE";
export const ACTION_COERCE_DATA = {};
export const ACTION_DEMORALIZE = "DEMORALIZE";
export const ACTION_DEMORALIZE_DATA = {};
export const ACTION_ADMINISTER_FIRST_AID = "ADMINISTER_FIRST_AID";
export const ACTION_ADMINISTER_FIRST_AID_DATA = {};
export const ACTION_TREATE_DISEASE = "TREATE_DISEASE";
export const ACTION_TREATE_DISEASE_DATA = {};
export const ACTION_TREAT_POISON = "TREAT_POISON";
export const ACTION_TREAT_POISON_DATA = {};
export const ACTION_TREAT_WOUNDS = "TREAT_WOUNDS";
export const ACTION_TREAT_WOUNDS_DATA = {};
export const ACTION_COMMAND_AN_ANIMAL = "COMMAND_AN_ANIMAL";
export const ACTION_COMMAND_AN_ANIMAL_DATA = {};
export const ACTION_PERFORM = "PERFORM";
export const ACTION_PERFORM_DATA = {};
export const ACTION_SUBSIST = "SUBSIST";
export const ACTION_SUBSIST_DATA = {};
export const ACTION_CREATE_FORGERY = "CREATE_FORGERY";
export const ACTION_CREATE_FORGERY_DATA = {};
export const ACTION_CONCEAL_AN_OBJECT = "CONCEAL_AN_OBJECT";
export const ACTION_CONCEAL_AN_OBJECT_DATA = {};
export const ACTION_HIDE = "HIDE";
export const ACTION_HIDE_DATA = {};
export const ACTION_SNEAK = "SNEAK";
export const ACTION_SNEAK_DATA = {};
export const ACTION_SENSE_DIRECTION = "SENSE_DIRECTION";
export const ACTION_SENSE_DIRECTION_DATA = {};
export const ACTION_COVER_TRACKS = "COVER_TRACKS";
export const ACTION_COVER_TRACKS_DATA = {};
export const ACTION_TRACK = "TRACK";
export const ACTION_TRACK_DATA = {};
export const ACTION_PALM_AN_OBJECT = "PALM_AN_OBJECT";
export const ACTION_PALM_AN_OBJECT_DATA = {};
export const ACTION_STEAL = "STEAL";
export const ACTION_STEAL_DATA = {};
export const ACTION_DISABLE_A_DEVICE = "DISABLE_A_DEVICE";
export const ACTION_DISABLE_A_DEVICE_DATA = {};
export const ACTION_PICK_A_LOCK = "PICK_A_LOCK";
export const ACTION_PICK_A_LOCK_DATA = {};
export const ACTION_GATHER_INFORMATION = "GATHER_INFORMATION";
export const ACTION_GATHER_INFORMATION_DATA = {};
export const ACTION_MAKE_AN_IMPRESSION = "MAKE_AN_IMPRESSION";
export const ACTION_MAKE_AN_IMPRESSION_DATA = {};
export const ACTION_REQUEST = "REQUEST";
export const ACTION_REQUEST_DATA = {};

export const ACTION_BALANCE = "BALANCE";
export const ACTION_BALANCE_DATA = {};

export const ACTION_BORROW_AN_ARCANE_SPELL = "BORROW_AN_ARCANE_SPELL";
export const ACTION_BORROW_AN_ARCANE_SPELL_DATA = {};

export const ACTION_CLIMB = "CLIMB";
export const ACTION_CLIMB_DATA = {};

export const ACTION_CRAFT = "CRAFT";
export const ACTION_CRAFT_DATA = {};

export const ACTION_DECIPHER_WRITING = "DECIPHER_WRITING";
export const ACTION_DECIPHER_WRITING_DATA = {};

export const ACTION_DISARM = "DISARM";
export const ACTION_DISARM_DATA = {};

export const ACTION_EARN_INCOME = "EARN_INCOME";
export const ACTION_EARN_INCOME_DATA = {};

export const ACTION_FORCE_OPEN = "FORCE_OPEN";
export const ACTION_FORCE_OPEN_DATA = {};

export const ACTION_GRAPPLE = "GRAPPLE";
export const ACTION_GRAPPLE_DATA = {};

export const ACTION_HIGH_JUMP = "HIGH_JUMP";
export const ACTION_HIGH_JUMP_DATA = {};

export const ACTION_IDENTIFY_ALCHEMY = "IDENTIFY_ALCHEMY";
export const ACTION_IDENTIFY_ALCHEMY_DATA = {};

export const ACTION_IDENTIFY_MAGIC = "IDENTIFY_MAGIC";
export const ACTION_IDENTIFY_MAGIC_DATA = {};

export const ACTION_LEARN_A_SPELL = "LEARN_A_SPELL";
export const ACTION_LEARN_A_SPELL_DATA = {};

export const ACTION_LONG_JUMP = "LONG_JUMP";
export const ACTION_LONG_JUMP_DATA = {};

export const ACTION_MANEUVER_IN_FLIGHT = "MANEUVER_IN_FLIGHT";
export const ACTION_MANEUVER_IN_FLIGHT_DATA = {};

export const ACTION_RECALL_KNOWLEDGE = "RECALL_KNOWLEDGE";
export const ACTION_RECALL_KNOWLEDGE_DATA = {};

export const ACTION_REPAIR = "REPAIR";
export const ACTION_REPAIR_DATA = {};

export const ACTION_SHOVE = "SHOVE";
export const ACTION_SHOVE_DATA = {};

export const ACTION_SQUEEZE = "SQUEEZE";
export const ACTION_SQUEEZE_DATA = {};

export const ACTION_SWIM = "SWIM";
export const ACTION_SWIM_DATA = {};

export const ACTION_TRIP = "TRIP";
export const ACTION_TRIP_DATA = {};

export const ACTION_TUMBLE_THROUGH = "TUMBLE_THROUGH";
export const ACTION_TUMBLE_THROUGH_DATA = {};

export const ACTION_RAGE = "RAGE";
export const ACTION_RAGE_DATA = {
  name: ACTION_RAGE,
  title: "Rage",
  traits: [BARBARIAN, CONCENTRATE, EMOTION, MENTAL],
};
export const ACTION_MIGHTY_RAGE = "MIGHTY_RAGE";
export const ACTION_MIGHTY_RAGE_DATA = {
  name: ACTION_MIGHTY_RAGE,
  title: "Mighty Rage",
  traits: [BARBARIAN],
};
export const ACTION_MOMENT_OF_CLARITY = "ACTION_MOMENT_OF_CLARITY";
export const ACTION_MOMENT_OF_CLARITY_DATA = {
  name: ACTION_MOMENT_OF_CLARITY,
  title: "Moment of Clarity",
  traits: [BARBARIAN, CONCENTRATE, RAGE],
};
export const ACTION_SUDDEN_CHARGE = "ACTION_SUDDEN_CHARGE";
export const ACTION_SUDDEN_CHARGE_DATA = {
  name: ACTION_SUDDEN_CHARGE,
  title: "Sudden Charge",
  traits: [FLOURISH, OPEN],
};
export const ACTION_POWER_ATTACK = "ACTION_POWER_ATTACK";
export const ACTION_POWER_ATTACK_DATA = {
  name: ACTION_POWER_ATTACK,
  title: "Power Attack",
  traits: [FLOURISH],
};
