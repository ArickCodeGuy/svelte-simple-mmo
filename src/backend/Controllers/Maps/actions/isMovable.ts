import type { MapController } from '..';
import type { Position } from '../../Livings/types';

export const useIsMovable =
  (mapController: MapController) =>
  (position: Position): boolean => {
    try {
      const map = mapController.getById(position.mapId);
      const pos = `${position.x},${position.y}`;

      if (!map.layout[pos]) {
        return false;
      }
      const cellType = mapController.mapCellTypes.getById(
        map.layout[pos].typeId
      );
      return cellType.walkTime !== -1;
    } catch (e) {
      return false;
    }
  };
