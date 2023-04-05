import type { LivingsController } from '..';
import type { Living } from '../types';

export const useUpdate =
  (livingsController: LivingsController) =>
  (id: number, newState: Living): Living => {
    const livingIndex = livingsController.findIndexById(id);
    livingsController.livings[livingIndex] = newState;
    return newState;
  };
