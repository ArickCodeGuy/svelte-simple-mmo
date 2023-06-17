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
