import type { LivingsController } from '..';
import type { LivingStats } from '../types';

export const useUpdateStats =
  (livingsController: LivingsController) =>
  (id: number, updatedStats: LivingStats) => {
    const { stats, statPoints } = livingsController.getById(id);

    const spentPoints = (
      Object.entries(stats) as [keyof LivingStats, ValueOf<LivingStats>][]
    ).reduce((res, [key, value]) => {
      const diff = updatedStats[key] - value;
      if (diff < 0) throw new Error(`Stat ${key} value is less than before`);

      return res + diff;
    }, 0);

    if (spentPoints > statPoints) throw new Error(`Spent more points than has`);

    livingsController.update(id, (v) => ({
      ...v,
      statPoints: v.statPoints - spentPoints,
      stats: updatedStats,
    }));
  };