import { LivingsController } from '..';

export const useUpdateCurrentHealth =
  (livingsController: LivingsController) =>
  (id: number, updater: ((updater: number) => number) | number) => {
    return livingsController.update(id, (v) => {
      const currentHealth =
        typeof updater === 'function' ? updater(v.health.current) : updater;

      return {
        ...v,
        health: {
          ...v.health,
          current: currentHealth,
        },
      };
    });
  };
