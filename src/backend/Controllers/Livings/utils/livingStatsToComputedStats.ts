import type { Living, LivingComputedStats } from '../types';
import { livingCurrentHealth } from './livingCurrentHealth';

export const livingStatsToComputedStats = (
  living: Living
): LivingComputedStats => ({
  health: Math.floor(
    living.baseStats.health * (1 + living.lvl * 0.1) +
      living.stats.vitality * 15
  ),
  attack: Math.floor(living.baseStats.attack + living.stats.vitality * 3),
  currentHealth: livingCurrentHealth(living),
  lastUpdated: new Date().getTime(),
});
