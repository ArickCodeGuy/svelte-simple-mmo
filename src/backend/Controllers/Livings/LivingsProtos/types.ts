import type { LivingBaseStats, LivingDrop, LivingStats } from '../types';

export type LivingProto = {
  id: number;
  name: string;
  lvl: number;
  expGives: number;
  stats: Partial<LivingStats> & LivingBaseStats;
  drops?: LivingDrop[];
};
