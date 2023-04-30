import type { ServerController } from '..';

export const useInitFight =
  (serverController: ServerController) =>
  (initiatorId: number, receiverId: number) => {
    serverController.fightActions.init([initiatorId], [receiverId]);

    return serverController.publicApi.getState(initiatorId);
  };
