import type { BaseItem } from '@/backend/Controllers/Base';
import type { ServerController } from '..';
import type { Living } from '@/backend/Controllers/Livings/types';

export const useRespawn =
  (serverController: ServerController) => (id: number) => {
    const living = serverController.livingsController.getById(id);

    if (!living.protoId) {
      respawnPlayer(serverController, living);
      return;
    }
    respawnNPC(serverController, living);
  };

export const respawnNPC = (
  serverController: ServerController,
  living: BaseItem<Living>
) => {
  serverController.livingsController.remove(living.id);
  serverController.livingsController.createFromId(
    living.protoId,
    living.position,
    living.mapArea
  );
};

export const respawnPlayer = (
  serverController: ServerController,
  living: BaseItem<Living>
) => {
  throw new Error('FINISH THIS');
};
