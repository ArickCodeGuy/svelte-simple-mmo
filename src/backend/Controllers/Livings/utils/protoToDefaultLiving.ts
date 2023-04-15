import { Living, LivingProto } from '../types';
import { livingStatsToComputedStats } from './livingStatsToComputedStats';

export const protoToDefaultLiving = (proto: LivingProto): Living => {
  const living: Living = {
    ...proto,
    stats: { ...proto.stats },
    protoId: proto.id,
    exp: 0,
    statPoints: 0,
    skillPoints: 0,
    skills: [],
    computedStats: {
      health: 0,
      currentHealth: 0,
      attack: 0,
      lastUpdated: 0, // so that currentHealth would be max
    },
    position: {
      x: 0,
      y: 0,
      mapId: 0,
    },
  };
  living.computedStats = livingStatsToComputedStats(living);
  living.computedStats.currentHealth = living.computedStats.health;

  return living;
};
