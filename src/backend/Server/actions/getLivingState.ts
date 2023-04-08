import type { FightInstance } from '@/backend/Controllers/Fights/types';
import type { ServerController } from '..';
import type { BaseItem } from '@/backend/Controllers/Base';

export const useGetLivingState =
  (serverController: ServerController) => (id: number) => {
    const living = serverController.livingsController.getById(id);
    if (!living) return;

    const map = serverController.mapController.getById(living.position.mapId);

    let fightInstance: BaseItem<FightInstance> | undefined = undefined;
    if (living.fightInstanceId) {
      fightInstance = serverController.fightController.getById(
        living.fightInstanceId
      );
    }

    const neighbors = serverController.livingsController.getLivingsByPosition(
      living.position
    );

    return {
      living,
      map,
      fightInstance,
      neighbors,
    };
  };
