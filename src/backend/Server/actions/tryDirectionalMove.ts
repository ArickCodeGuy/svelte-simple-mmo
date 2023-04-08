import type { DirectionalMove } from '@/backend/Controllers/Livings/types';
import type { ServerController } from '..';

export const useTryDirectionalMove =
  (serverController: ServerController) =>
  (id: number, direction: DirectionalMove) => {
    const newLivingState = serverController.livingsController.directionalMove(
      id,
      direction
    )!;

    if (!serverController.mapController.isMovable(newLivingState.position))
      // You can't go to ${newLivingState.position}
      return serverController.getLivingState(id);

    if (newLivingState.activity) {
      // You are busy. You can not walk
      return serverController.getLivingState(id);
    }

    serverController.livingsController.update(id, newLivingState);
    return serverController.getLivingState(id);
  };
