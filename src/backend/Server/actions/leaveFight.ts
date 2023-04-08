import { ServerController } from '..';

export const useLeaveFight =
  (serverController: ServerController) => (id: number) => {
    serverController.livingsController.update(id, (v) => {
      delete v.activity;
      return v;
    });

    return serverController.getLivingState(id);
  };
