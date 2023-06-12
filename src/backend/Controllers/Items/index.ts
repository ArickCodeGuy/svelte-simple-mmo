import { BaseController, type BaseItem } from '../Base';
import { useInit } from './actions/init';
import type { Item } from './types';

export class ItemsController extends BaseController<Item> {
  #playerItems: {
    [playerId: string]: number[];
  };

  init: ReturnType<typeof useInit>;

  constructor(tableName: string) {
    super(tableName);

    this.init = useInit(this);
    this.#playerItems = {};

    this.init();
  }

  add(item: Item) {
    const newItem = super.add(item);

    if (!this.#playerItems[newItem.playerId]) {
      this.#playerItems[newItem.playerId] = [];
    }

    this.#playerItems[newItem.playerId].push(newItem.id);

    return newItem;
  }
  getPlayerItems(playerId: number) {
    return this.#playerItems[playerId] || [];
  }
}
