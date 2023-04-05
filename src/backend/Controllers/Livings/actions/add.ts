import type { LivingsController } from '..';
import type { Living } from '../types';

export const useAdd =
  (livingsController: LivingsController) => (living: Living) => {
    livingsController.livings.push(living);
  };
