import type { Position } from '@/types';
import type { MapController } from '..';

export const useIsMovable =
  (mapController: MapController) =>
  (position: Position): boolean => {
    try {
      const map = mapController.getMapById(position.mapId);

      if (!map.layout[position.y] || !map.layout[position.y][position.x]) {
        return false;
      }
      return map.layout[position.y][position.x].type !== 'BLOCK';
    } catch (e) {
      return false;
    }
  };
