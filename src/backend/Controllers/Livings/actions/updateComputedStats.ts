import { LivingsController } from '..';
import { LivingComputedStats } from '../types';

export const useUpdateCurrentHealth =
  (livingsController: LivingsController) =>
  (id: number, updater: ((updater: number) => number) | number) => {
    return livingsController.update(id, (v) => {
      const currentHealth =
        typeof updater === 'function'
          ? updater(v.computedStats.currentHealth)
          : updater;

      const computedStats = {
        ...v.computedStats,
        currentHealth,
        lastUpdated: new Date().getTime(),
      };

      return {
        ...v,
        computedStats,
      };
    });
  };
