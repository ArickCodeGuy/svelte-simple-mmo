import type { BaseItem } from '@/backend/Controllers/Base';
import type { ServerController } from '..';
import type { Living } from '@/backend/Controllers/Livings/types';
import { DEFAULT_RESPAWN_POSITION } from '../constants';

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

/**
 * Respawns player near last used fountain
 */
export const respawnPlayer = (
  serverController: ServerController,
  living: BaseItem<Living>
) => {
  serverController.livingsController.update(living.id, (v) => ({
    ...v,
    position: v.respawn ? { ...v.respawn } : DEFAULT_RESPAWN_POSITION,
  }));
};

export const useRespawn =
  (serverController: ServerController) => (id: number) => {
    const living = serverController.livingsController.getById(id);

    if (!living.protoId) {
      respawnPlayer(serverController, living);
      return;
    }
    respawnNPC(serverController, living);
  };
