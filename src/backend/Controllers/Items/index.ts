import { BaseController, type BaseItem } from '../Base';
import { useInit } from './actions/init';
import type { Item } from './types';

export class ItemsController extends BaseController<Item> {
  #playerItems: {
    [playerId: string]: number[];
  };

  init: ReturnType<typeof useInit>;
  #add: (item: Item) => BaseItem<Item>;

  constructor(tableName: string) {
    super(tableName);

    this.init = useInit(this);
    this.#add = this.add;
    this.#playerItems = {};

    this.init();
  }

  add(item: Item) {
    const newItem = this.#add(item);

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
