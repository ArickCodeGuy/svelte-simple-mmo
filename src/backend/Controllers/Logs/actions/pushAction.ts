import type { LogsController } from '..';
import type { LogAction } from '../types';

export const usePushAction =
  (controller: LogsController) => (id: number, action: LogAction) =>
    controller.update(id, (v) => ({
      ...v,
      actions: [...v.actions, action],
    }));
