import { Living, LivingProto } from '../types';
import { livingStatsToComputedStats } from './livingStatsToComputedStats';

export const protoToDefaultLiving = (proto: LivingProto): Living => {
  const living: Living = {
    ...proto,
    protoId: proto.id,
    exp: 0,
    currentHp: 0,
    points: 0,
    computedStats: {
      maxHp: 0,
      attack: 0,
    },
    lastUpdated: new Date().getTime(),
    stats: { ...proto.stats },
    position: {
      x: 0,
      y: 0,
      mapId: 0,
    },
  };
  living.computedStats = livingStatsToComputedStats(living);
  living.currentHp = living.computedStats.maxHp;

  return living;
};
