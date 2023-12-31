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

    // add default item
    serverController.itemsController.add(1, player.id);

    return serverController.publicApi.getState(player.id);
  };
