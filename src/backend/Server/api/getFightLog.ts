import type { ServerController } from '..';

export const useGetFightLog =
  (controller: ServerController) => (fightLogId: number) => {
    return controller.fightLogController.getById(fightLogId);
  };
