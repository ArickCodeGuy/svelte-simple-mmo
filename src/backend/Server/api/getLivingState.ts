import type { ServerController } from '..';
import type { GlobalInfo } from '../types';

export const useGetLivingState =
  (serverController: ServerController) =>
  (id: number): GlobalInfo => {
    const living = serverController.livingsController.getById(id);

    const map = serverController.mapController.getById(living.position.mapId);

    const fight = serverController.fightActions.info(living.id);

    const equipment = serverController.publicApi.items.equipment(id);

    const neighbour = serverController.livingsController.getLivingsByPosition(
      living.position
    );

    const distantLivings =
      serverController.livingsController.getLivingsPositions(living.position);

    const cellType = serverController.mapController.getCellType(
      living.position
    );

    return {
      living,
      /**
       * @@TODO: Front don't need all map info
       * like "npcSettings"
       */
      map,
      fight,
      neighbour,
      distantLivings,
      equipment,
      cellType,
    };
  };
