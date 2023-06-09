import type { MapArea } from '@/backend/Controllers/Maps/types';
import type { ServerController } from '..';
import { getRandomPositionFromArea } from '@/backend/Controllers/Maps/utils/getRandomPositionFromArea';

export const useInit = (serverController: ServerController) => () => {
  serverController.mapController.getState().forEach((map) => {
    if (!map.npcSettings) return;

    map.npcSettings.forEach((npcSetting) => {
      const area: MapArea =
        npcSetting.area || serverController.mapController.getMapArea(map.id);

      for (let i = 0; i < npcSetting.amount; i++) {
        const { x, y } = getRandomPositionFromArea(area);

        const position = {
          mapId: map.id,
          x,
          y,
        };
        serverController.livingsController.createFromId(
          npcSetting.id,
          position,
          area
        );
      }
    });
  });
};
