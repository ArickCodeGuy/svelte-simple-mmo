import type { LivingBaseStats, LivingDrop, LivingStats } from '../types';

export type LivingProto = {
  id: number;
  name: string;
  lvl: number;
  /**
   * Profile picture
   */
  pfp: string;
  expGives: number;
  stats: Partial<LivingStats> & LivingBaseStats;
  drops?: LivingDrop[];
};
