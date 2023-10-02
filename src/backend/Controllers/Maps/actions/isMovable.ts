import type { MapController } from '..';
import type { Position } from '../../Livings/types';

export const useIsMovable =
  (mapController: MapController) =>
  (position: Position): boolean => {
    try {
      const map = mapController.getById(position.mapId);

      if (!map.layout[position.y] || !map.layout[position.y][position.x]) {
        return false;
      }
      const cellType = mapController.mapCellTypes.getById(
        map.layout[position.y][position.x].typeId
      );
      return cellType.walkTime !== -1;
    } catch (e) {
      return false;
    }
  };
