import type { LivingsTable } from '..';
import type { LivingsPositions } from '../types';

export const useGetLivingsPositions =
  (livingsTable: LivingsTable) => (): LivingsPositions =>
    livingsTable.livings.reduce<LivingsPositions>((result, living) => {
      const { mapId, x, y } = living.position;

      if (!result[mapId]) result[mapId] = {};
      if (!result[mapId][y]) result[mapId][y] = {};
      if (!result[mapId][y][x]) {
        result[mapId][y][x] = [];
      }
      result[mapId][y][x].push(living);
      return result;
    }, {});
