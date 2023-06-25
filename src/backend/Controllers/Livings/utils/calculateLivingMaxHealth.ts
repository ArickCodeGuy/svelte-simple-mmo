import type { Living } from '../types';

export const calculateLivingMaxHealth = (living: Living): number => {
  return (
    living.stats.health +
    living.stats.dexterity +
    living.stats.strength * 2 +
    living.stats.vitality * 10
  );
};
