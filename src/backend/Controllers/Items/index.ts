import { BaseController } from '../Base';
import { useGetByPlayerId } from './actions/getByPlayerId';
import { useInit } from './actions/init';
import type { Item } from './types';

export class ItemsController extends BaseController<Item> {
  init: ReturnType<typeof useInit>;
  getByPlayerId: ReturnType<typeof useGetByPlayerId>;

  constructor(tableName: string) {
    super(tableName);

    this.init = useInit(this);
    this.getByPlayerId = useGetByPlayerId(this);

    this.init();
  }
}
