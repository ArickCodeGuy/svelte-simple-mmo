//@ts-nocheck
import type { Position } from '@/types';
import { livingsActions } from '../Livings';
import type { LivingsPositions } from './types';

export const getLivingsPositions = (): LivingsPositions =>
  livingsActions.getLivings().reduce((result, living) => {
    const { mapId, x, y } = living.position;

    if (!result[mapId]) result[mapId] = {};
    if (!result[mapId][y]) result[mapId][y] = {};
    if (!result[mapId][y][x]) {
      result[mapId][y][x] = [living];
    } else {
      result[mapId][y][x].push(living);
    }
    return result;
  }, {});

export const getMapLivingsPositions = (mapId: number) =>
  getLivingsPositions()[mapId] || {};

export const getLivingsByPosition = ({ mapId, y, x }: Position): Livings[] => {
  const livingsPositions = getLivingsPositions();

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
