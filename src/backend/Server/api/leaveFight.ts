import { ServerController } from '..';

export const useLeaveFight =
  (serverController: ServerController) => (playerId: number) => {
    serverController.livingsController.update(playerId, (v) => {
      delete v.activity;
      return v;
    });

    return serverController.getLivingState(playerId);
  };
