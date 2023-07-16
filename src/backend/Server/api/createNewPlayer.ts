import woodenSword from '@/backend/Controllers/Items/ItemsProtos/items/woodenSword';
import type { ServerController } from '..';
import type { GlobalInfo } from '../types';

export type CreateNewPlayerParams = {
  name: string;
};

export const useCreateNewPlayer =
  (serverController: ServerController) =>
  (params: CreateNewPlayerParams): GlobalInfo => {
    const player = serverController.livingsController.createNewPlayer(
      params.name
    );

    serverController.itemsController.add(woodenSword, player.id);

    return serverController.publicApi.getState(player.id);
  };
