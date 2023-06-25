import type { ServerController } from '..';
import type { GlobalInfo } from '../types';

export const useGetLivingState =
  (serverController: ServerController) =>
  (id: number): GlobalInfo => {
    const living = serverController.livingsController.getById(id);

    const map = serverController.mapController.getById(living.position.mapId);

    const fight = serverController.fightActions.info(living.id);

    const items = serverController.itemsController
      .getPlayerItems(living.id)
      .map((i) => serverController.itemsController.getById(i));

    const equipment = serverController.publicApi.getEquipment(id);

    const neighbors = serverController.livingsController.getLivingsByPosition(
      living.position
    );

    const distantLivings =
      serverController.livingsController.getLivingsPositions()[
        living.position.mapId
      ];

    return {
      living,
      map,
      fight,
      neighbors,
      distantLivings,
      items,
      equipment,
    };
  };
