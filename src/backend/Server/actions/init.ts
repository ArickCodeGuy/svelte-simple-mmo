import type { MapArea } from '@/backend/Controllers/Maps/types';
import type { ServerController } from '..';
import { randomItemFromArray } from '@/utils/randomItemFromArray';
import type { Position } from '@/backend/Controllers/Livings/types';

export const useInit = (serverController: ServerController) => () => {
  serverController.mapController.getState().forEach((map) => {
    if (!map.npcSettings) return;
    const mapId = map.id;

    map.npcSettings.forEach((npcSetting) => {
      const area: MapArea = npcSetting.area;

      for (let i = 0; i < npcSetting.amount; i++) {
        const [x, y] = randomItemFromArray(area).split(',');

        const position: Position = {
          mapId,
          x: Number(x),
          y: Number(y),
        };

        serverController.livingsController.createNpc(
          npcSetting.id,
          position,
          area
        );
      }
    });
  });
};
