import type { ServerController } from '..';
import type { GlobalInfo } from '../types';

export const useGetLivingState =
  (serverController: ServerController) => (id: number) => {
    const living = serverController.livingsController.getById(id);
    if (!living) return;

    const map = serverController.mapController.getById(living.position.mapId);

    const fight = serverController.getFightInfo(living.id);

    const neighbors = serverController.livingsController.getLivingsByPosition(
      living.position
    );

    return {
      living,
      map,
      fight,
      neighbors,
    } as GlobalInfo;
  };