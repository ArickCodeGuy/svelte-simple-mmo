import type { ItemProtoStatBonus } from '../types';

export const itemProtoStatBonusToNumber = (
  bonus: ItemProtoStatBonus
): number => {
  if (Array.isArray(bonus.value)) {
    const [min, max] = bonus.value;
    const range = max - min;
    return Math.floor(Math.random() * range) + min;
  }
  return bonus.value;
};

export const itemProtoStatBonusRecordToRecord = (
  bonuses: Record<string, ItemProtoStatBonus>
): Record<string, number> => {
  const res: Record<string, number> = {};
  for (const key in bonuses) {
    res[key] = itemProtoStatBonusToNumber(bonuses[key]);
  }
  return res;
};
