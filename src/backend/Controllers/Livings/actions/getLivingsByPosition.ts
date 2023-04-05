import type { Position } from '@/types';
import type { LivingsController } from '..';
import type { Living } from '../types';

export const useGetLivingsByPosition =
  (livingsController: LivingsController) =>
  ({ mapId, y, x }: Position): Living[] => {
    const livingsPositions = livingsController.getLivingsPositions();

    if (
      !livingsPositions[mapId] ||
      !livingsPositions[mapId][y] ||
      !livingsPositions[mapId][y][x]
    ) {
      return [];
    } else {
      return livingsPositions[mapId][y][x];
    }
  };
