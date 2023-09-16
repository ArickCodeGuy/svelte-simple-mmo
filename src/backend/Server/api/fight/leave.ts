import { ServerController } from '../..';

export const useLeave =
  (serverController: ServerController) => (playerId: number) => {
    serverController.livingsController.update(playerId, (v) => {
      delete v.activity;
      return v;
    });

    return serverController.publicApi.getState(playerId);
  };
