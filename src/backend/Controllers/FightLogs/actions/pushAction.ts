import type { FightLogsController, LogsController } from '..';
import type { LogAction } from '../types';

export const usePushAction =
  (controller: FightLogsController) => (id: number, action: LogAction) =>
    controller.update(id, (v) => ({
      ...v,
      actions: [...v.actions, action],
    }));
