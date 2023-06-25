import type { LivingsController } from '..';
import type { LivingStats } from '../types';
import { calculateLivingMaxHealth } from '../utils/calculateLivingMaxHealth';
import { livingStats } from '../utils/livingStats';

export const useUpdateStats =
  (livingsController: LivingsController) =>
  (id: number, updatedStats: LivingStats) => {
    const living = livingsController.getById(id);

    const spentPoints = (
      Object.entries(livingStats(living)) as [
        keyof LivingStats,
        ValueOf<LivingStats>
      ][]
    ).reduce((res, [key, value]) => {
      const diff = updatedStats[key] - value;
      if (diff < 0) throw new Error(`Stat ${key} value is less than before`);

      return res + diff;
    }, 0);

    if (spentPoints > living.statPoints)
      throw new Error(`Spent more points than has`);

    return livingsController.update(id, (v) => {
      const newState = {
        ...v,
        statPoints: v.statPoints - spentPoints,
        stats: {
          ...v.stats,
          ...updatedStats,
        },
      };
      newState.health.max = calculateLivingMaxHealth(newState);

      return newState;
    });
  };
