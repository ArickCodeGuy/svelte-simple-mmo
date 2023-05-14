import { BaseController } from '../Base';
import { useInit } from './actions/init';
import type { Item } from './types';

export class ItemsController extends BaseController<Item> {
  init: ReturnType<typeof useInit>;

  constructor(tableName: string) {
    super(tableName);

    this.init = useInit(this);

    this.init();
  }
}
