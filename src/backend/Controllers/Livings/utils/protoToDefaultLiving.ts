import type { LivingProto } from '../LivingsProtos/types';
import type { Living } from '../types';
import { calculateLivingMaxHealth } from './calculateLivingMaxHealth';

export const protoToDefaultLiving = (proto: LivingProto): Living => {
  const living: Living = {
    name: proto.name,
    lvl: proto.lvl,
    expGives: proto.expGives,
    stats: {
      ...proto.stats,
      vitality: proto.stats.vitality || 0,
      dexterity: proto.stats.dexterity || 0,
      strength: proto.stats.strength || 0,
      intelligence: proto.stats.intelligence || 0,
      mind: proto.stats.mind || 0,
    },
    health: {
      max: 0,
      current: 0,
    },
    lastUpdated: 0,
    protoId: proto.id,
    exp: 0,
    statPoints: 0,
    skillPoints: 0,
    skills: [],
    position: {
      x: 0,
      y: 0,
      mapId: 0,
    },
    pfp: proto.pfp,
  };
  living.health.max = calculateLivingMaxHealth(living);
  living.health.current = calculateLivingMaxHealth(living);

  return living;
};
