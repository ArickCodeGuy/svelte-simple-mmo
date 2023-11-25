import type { ServerController } from '../..';

export const useFightTimeoutAdd =
  (controller: ServerController) => (fightInstanceId: number) => {
    const fightInstance = controller.fightController.getById(fightInstanceId);

    const timeoutId = window.setTimeout(() => {
      controller.fightActions.turn(fightInstanceId);

      controller.fightController.updateTimeout(fightInstanceId);
      controller.fightActions.timeoutAdd(fightInstanceId);
    }, fightInstance.nextTurn - new Date().getTime());

    controller.fightTimeoutMap[fightInstanceId] = timeoutId;
  };

export const useFightTimeoutRemove =
  (controller: ServerController) => (fightInstanceId: number) => {
    const timeoutId = controller.fightTimeoutMap[fightInstanceId];

    window.clearTimeout(timeoutId);

    delete controller.fightTimeoutMap[fightInstanceId];
  };
