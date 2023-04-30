import type { LivingStats } from '@/backend/Controllers/Livings/types';
import { ServerController } from '..';

export const useUpdateStats =
  (serverController: ServerController) =>
  (id: number, updatedStats: LivingStats) => {
    try {
      serverController.livingsController.updateStats(id, updatedStats);
    } catch (e) {
      //
    }

    return serverController.publicApi.getState(id);
  };
