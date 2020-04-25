import { FEAT_LIST as CLASS_FEAT_LIST } from "./class-feats";
import { FEAT_LIST as SKILL_FEAT_LIST } from "./skill-feats";

export * from "./class-feats";
export * from "./skill-feats";

export const FEAT_LIST = [...CLASS_FEAT_LIST, ...SKILL_FEAT_LIST];

export const FEAT_MAP = FEAT_LIST.reduce(
  (acc, feat) => ({ ...acc, [feat.name]: feat }),
  {}
);
