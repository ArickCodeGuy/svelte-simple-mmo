import type { LivingsController } from '..';
import type { Living } from '../types';

export const useUpdate =
  (livingsController: LivingsController) =>
  (id: number, updater: (oldState: Living) => Living): Living => {
    const livingIndex = livingsController.findIndexById(id);
    const living = livingsController.livings[livingIndex];
    const newState = updater(living);
    livingsController.livings[livingIndex] = newState;
    return newState;
  };
