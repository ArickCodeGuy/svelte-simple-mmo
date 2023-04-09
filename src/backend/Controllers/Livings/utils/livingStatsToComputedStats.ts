import { Living, LivingComputedStats } from '../types';

// Also add items stats
export const livingStatsToComputedStats = (
  living: Living
): LivingComputedStats => ({
  maxHp: Math.floor(
    living.stats.baseHp * (1 + living.lvl * 0.1) + living.stats.vitality * 15
  ),
  attack: Math.floor(living.stats.baseAttack + living.stats.vitality * 3),
});
