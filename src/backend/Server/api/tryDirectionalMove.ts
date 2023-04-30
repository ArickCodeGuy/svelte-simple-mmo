import type { DirectionalMove } from '@/backend/Controllers/Livings/types';
import type { ServerController } from '..';

export const useTryDirectionalMove =
  (serverController: ServerController) =>
  (id: number, direction: DirectionalMove) => {
    const newLivingState = serverController.livingsController.directionalMove(
      id,
      direction
    )!;

    if (!serverController.mapController.isMovable(newLivingState.position)) {
      console.warn(
        `tryDirectionalMove: You can't go to ${newLivingState.position}`
      );
      return serverController.publicApi.getState(id);
    }

    if (newLivingState.activity) {
      console.warn('tryDirectionalMove: You are busy. You can not walk');
      return serverController.publicApi.getState(id);
    }

    serverController.livingsController.update(id, newLivingState);
    return serverController.publicApi.getState(id);
  };
