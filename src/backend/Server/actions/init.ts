import type { ServerController } from '..';
import type { Position } from '@/backend/Controllers/Livings/types';

export const useInit = (serverController: ServerController) => () => {
  serverController.mapController.getState().forEach((map) => {
    if (!map.npcSettings) return;

    map.npcSettings.forEach((npcSetting) => {
      const area: Position[] = npcSetting.area;

      for (let i = 0; i < npcSetting.amount; i++) {
        serverController.livingsController.createNpc(npcSetting.id, area);
      }
    });
  });
};
