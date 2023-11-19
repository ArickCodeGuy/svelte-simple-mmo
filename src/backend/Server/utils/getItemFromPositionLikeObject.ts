import type { Position } from '@/backend/Controllers/Livings/types';
import type { PositionLikeObject, Updater } from '../types';
import { updaterFunction } from './updaterFunction';

export const getItemFromPositionLikeObject = <T>(
  { mapId, x, y }: Position,
  obj: PositionLikeObject<T>
): T | undefined => obj?.[mapId]?.[`${x},${y}`];

export const setItemToPositionLikeObject = <T>(
  { mapId, x, y }: Position,
  obj: PositionLikeObject<T>,
  updater: Updater<T>
) => {
  const pos = `${x},${y}`;

  if (!obj[mapId]) {
    obj[mapId] = {};
  }

  obj[mapId][pos] = updaterFunction(updater, obj[mapId][pos]);
};
