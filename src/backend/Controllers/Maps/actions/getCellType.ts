import type { MapController } from '..';
import type { Position } from '../../Livings/types';

export const useGetCellType =
  (controller: MapController) => (position: Position) => {
    const pos = `${position.x},${position.y}`;
    const cell = controller.getById(position.mapId).layout[pos];

    return controller.mapCellTypes.getById(cell.typeId);
  };
