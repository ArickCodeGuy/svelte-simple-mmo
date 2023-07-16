import { BaseController } from '../../Base';
import { useInit } from './actions/init';
import type { ItemProto } from './types';

export class ItemsProtosController extends BaseController<ItemProto> {
  init: ReturnType<typeof useInit>;

  constructor(tableName: string) {
    super(tableName);

    this.init = useInit(this);

    this.init();
  }
}
