import type { ServerController } from '..';

export const useGetFightLogs =
  (controller: ServerController) => (playerId: number) => {
    const player = controller.livingsController.getById(playerId);

    if (!player.fightLogs) {
      return [];
    }

    return player.fightLogs.map((i) =>
      controller.fightLogController.getById(i)
    );
  };
