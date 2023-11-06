import type { MapInfo } from './types';
import { useIsMovable } from './actions/isMovable';
import { BaseController } from '../Base';
import { MapCellTypesController } from './MapCellTypes';
import { DEFAULT_MAP_INFO } from './maps/default';
import { useGetCellType } from './actions/getCellType';

export class MapController extends BaseController<MapInfo> {
  mapCellTypes: MapCellTypesController;

  isMovable: ReturnType<typeof useIsMovable>;
  getCellType: ReturnType<typeof useGetCellType>;

  constructor(tableName: string) {
    super(tableName);
    this.mapCellTypes = new MapCellTypesController(`${tableName}_CELL_TYPES`);

    this.isMovable = useIsMovable(this);
    this.getCellType = useGetCellType(this);

    this.add(DEFAULT_MAP_INFO);
  }
}
