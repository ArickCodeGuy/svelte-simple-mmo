import type { MapInfo } from './types';
import { createDefaultMap } from './maps/default';
import { useIsMovable } from './actions/isMovable';
import { useGetRandomPositionFromArea } from './actions/getRandomPositionFromArea';
import { useGetMapArea } from './actions/getMapArea';
import { BaseController } from '../Base';

export class MapController extends BaseController<MapInfo> {
  isMovable: ReturnType<typeof useIsMovable>;
  getRandomPositionFromArea: ReturnType<typeof useGetRandomPositionFromArea>;
  getMapArea: ReturnType<typeof useGetMapArea>;

  constructor(tableName: string) {
    super(tableName);
    this.isMovable = useIsMovable(this);
    this.getRandomPositionFromArea = useGetRandomPositionFromArea(this);
    this.getMapArea = useGetMapArea(this);

    this.add(createDefaultMap());
  }
}
