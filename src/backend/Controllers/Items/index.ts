import { BaseController } from '../Base';
import type { Item } from './types';

export class ItemsController extends BaseController<Item> {
  constructor(tableName: string) {
    super(tableName);
  }
}
