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
    const item = super.add({
      ...itemProtoToItem(proto),
      playerId,
    });

    if (!this.#playerItems[item.playerId]) {
      this.#playerItems[item.playerId] = [];
    }

    this.#playerItems[item.playerId].push(item.id);

    return item;
  }

  getPlayerItems(playerId: number) {
    return this.#playerItems[playerId] || [];
  }
}
