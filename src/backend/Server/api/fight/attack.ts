import type { ServerController } from '../..';

export const useAttack =
  (controller: ServerController) => (livingId: number, attackType: number) => {
    controller.fightActions.attack(livingId, attackType);

    return controller.publicApi.getState(livingId);
  };
