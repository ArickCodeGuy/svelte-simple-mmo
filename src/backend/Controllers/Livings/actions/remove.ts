import type { LivingsController } from '..';
import type { Living } from '../types';

export const useRemove =
  (livingsController: LivingsController) => (living: Living) => {
    livingsController.livings = livingsController.livings.filter(
      (i) => i.id !== living.id
    );
  };
