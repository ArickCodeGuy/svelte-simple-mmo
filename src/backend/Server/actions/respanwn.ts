import type { BaseItem } from '@/backend/Controllers/Base';
import type { ServerController } from '..';
import type { Living } from '@/backend/Controllers/Livings/types';

export const useRespawn =
  (serverController: ServerController) => (id: number) => {
    const living = serverController.livingsController.getById(id);
    if (!living) return;

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
    living.position
  );
  // serverController.fightController.remove(id);
};

export const respawnPlayer = (
  serverController: ServerController,
  living: BaseItem<Living>
) => {
  throw new Error('FINISH THIS');
};
