import type { LivingsController } from '..';
import type { LivingsPositions } from '../types';

/**
 * @@TODO: fix optimize
 */
export const useGetLivingsPositions =
  (livingsController: LivingsController) => (): LivingsPositions =>
    livingsController.getState().reduce<LivingsPositions>((result, living) => {
      const { mapId, x, y } = living.position;

      if (!result[mapId]) result[mapId] = {};
      if (!result[mapId][y]) result[mapId][y] = {};
      if (!result[mapId][y][x]) {
        result[mapId][y][x] = [];
      }
      result[mapId][y][x].push(living);
      return result;
    }, {});
