import type { Living, LivingStats } from '../types';

export const livingStats = (living: Living): LivingStats => ({
  vitality: living.stats.vitality,
  strength: living.stats.strength,
  dexterity: living.stats.dexterity,
  mind: living.stats.mind,
  intelligence: living.stats.intelligence,
});
