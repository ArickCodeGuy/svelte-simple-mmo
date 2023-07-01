import type { MapInfo } from './types';
import { createDefaultMap } from './maps/default';
import { useIsMovable } from './actions/isMovable';
import { useGetMapArea } from './actions/getMapArea';
import { BaseController } from '../Base';
import { MapCellTypesController } from './MapCellTypes';

export class MapController extends BaseController<MapInfo> {
  isMovable: ReturnType<typeof useIsMovable>;
  getMapArea: ReturnType<typeof useGetMapArea>;
  MapCellTypes: MapCellTypesController;

  constructor(tableName: string) {
    super(tableName);
    this.isMovable = useIsMovable(this);
    this.getMapArea = useGetMapArea(this);
    this.MapCellTypes = new MapCellTypesController('MapCellTypes');

    this.add(createDefaultMap());
  }
}
