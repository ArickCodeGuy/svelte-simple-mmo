import type { LivingsController } from '..';
import type { BaseItem } from '../../Base';
import type { Living, Position } from '../types';

export const useGetLivingsByPosition =
  (livingsController: LivingsController) =>
  ({ mapId, y, x }: Position): BaseItem<Living>[] => {
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