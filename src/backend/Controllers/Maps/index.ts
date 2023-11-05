import type { MapInfo } from './types';
import { useIsMovable } from './actions/isMovable';
import { BaseController } from '../Base';
import { MapCellTypesController } from './MapCellTypes';
import { DEFAULT_MAP_INFO } from './maps/default';
import type { Position } from '../Livings/types';

export class MapController extends BaseController<MapInfo> {
  mapCellTypes: MapCellTypesController;

  isMovable: ReturnType<typeof useIsMovable>;

  constructor(tableName: string) {
    super(tableName);
    this.mapCellTypes = new MapCellTypesController(`${tableName}_CELL_TYPES`);

    this.isMovable = useIsMovable(this);

    this.add(DEFAULT_MAP_INFO);
  }

  getCellType(position: Position) {
    const pos = `${position.x},${position.y}`;
    const cell = this.getById(position.mapId).layout[pos];

    return this.mapCellTypes.getById(cell.typeId);
  }
}
