import { BaseController } from '../../Base';
import { useInit } from './actions/init';
import type { MapCellType } from './types';

export class MapCellTypesController extends BaseController<MapCellType> {
  init: ReturnType<typeof useInit>;

  constructor(tableName: string) {
    super(tableName);

    this.init = useInit(this);

    this.init();
  }
}
