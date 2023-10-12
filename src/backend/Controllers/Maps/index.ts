import type { MapInfo } from './types';
import { useIsMovable } from './actions/isMovable';
import { BaseController } from '../Base';
import { MapCellTypesController } from './MapCellTypes';
import { DEFAULT_MAP_INFO } from './maps/default';

export class MapController extends BaseController<MapInfo> {
  mapCellTypes: MapCellTypesController;

  isMovable: ReturnType<typeof useIsMovable>;

  constructor(tableName: string) {
    super(tableName);
    this.mapCellTypes = new MapCellTypesController(`${tableName}_CELL_TYPES`);

    this.isMovable = useIsMovable(this);

    this.add(DEFAULT_MAP_INFO);
  }
}
