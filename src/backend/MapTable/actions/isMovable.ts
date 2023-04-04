import type { Position } from '@/types';
import type { MapTable } from '..';

export const useIsMovable =
  (mapTable: MapTable) =>
  (position: Position): boolean => {
    try {
      const map = mapTable.getMapById(position.mapId);

      if (!map.layout[position.y] || !map.layout[position.y][position.x]) {
        return false;
      }
      return map.layout[position.y][position.x].type !== 'BLOCK';
    } catch (e) {
      return false;
    }
  };
