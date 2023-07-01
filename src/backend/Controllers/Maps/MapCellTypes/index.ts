import { BaseController } from '../../Base';
import { useDictionary } from './actions/dictionary';
import { useInit } from './actions/init';
import type { MapCellType } from './types';

export class MapCellTypesController extends BaseController<MapCellType> {
  init: ReturnType<typeof useInit>;
  dictionary: ReturnType<typeof useDictionary>;

  constructor(tableName: string) {
    super(tableName);

    this.init = useInit(this);
    this.dictionary = useDictionary(this);

    this.init();
  }
}
