import type { Position } from '@/types';
import type { LivingsTable } from '..';
import type { Living } from '../types';

export const useGetLivingsByPosition =
  (livingsTable: LivingsTable) =>
  ({ mapId, y, x }: Position): Living[] => {
    const livingsPositions = livingsTable.getLivingsPositions();

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
