import { BaseController } from '../Base';
import type { Item, ItemProto } from './types';
import { itemProtoToItem } from './utils/itemProtoToItem';

export class ItemsController extends BaseController<Item> {
  #playerItems: {
    [playerId: string]: number[];
  };

  constructor(tableName: string) {
    super(tableName);

    this.#playerItems = {};
  }

  // @@TODO: fix
  add(proto: ItemProto, playerId: number) {
    const item = itemProtoToItem(proto);
    const newItem = super.add({
      ...item,
      playerId,
    });

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
