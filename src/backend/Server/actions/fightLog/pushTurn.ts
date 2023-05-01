import type { ServerController } from '../..';

export const useFightLogPushTurn =
  (serverController: ServerController) => (fightLogId: number) => {
    serverController.fightLogController.update(fightLogId, (v) => ({
      ...v,
      turns: [...v.turns, []],
    }));
  };
