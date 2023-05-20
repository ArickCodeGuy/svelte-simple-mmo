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

    return serverController.publicApi.getState(player.id);
  };
