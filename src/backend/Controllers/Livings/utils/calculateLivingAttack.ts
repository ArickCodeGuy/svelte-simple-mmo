import type { Living } from '../types';

export const calculateLivingAttack = (living: Living) => {
  return living.stats.attack + living.stats.strength * 5;
};
