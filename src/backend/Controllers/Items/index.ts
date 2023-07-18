import { BaseController, type BaseItem } from '../Base';
import { ItemsProtosController } from './ItemsProtos';
import type { ItemProto } from './ItemsProtos/types';
import type { Item } from './types';
import { itemProtoToItem } from './utils/itemProtoToItem';

export class ItemsController extends BaseController<Item> {
  #playerItems: {
    [playerId: string]: number[];
  };
  itemsProtosController: ItemsProtosController;

  constructor(tableName: string) {
    super(tableName);
    this.itemsProtosController = new ItemsProtosController(
      `${tableName}_PROTOS`
    );

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

  replace(id: number, item: BaseItem<Item>) {
    const oldItem = this.getById(id);
    if (oldItem.playerId !== item.playerId) {
      this.#playerItems[oldItem.playerId] = this.#playerItems[
        oldItem.playerId
      ].filter((i) => i !== id);
      this.#playerItems[item.playerId].push(item.id);
    }
    super.replace(id, item);
  }

  remove(id: number, playerId: number) {
    this.#playerItems[playerId] = this.#playerItems[playerId].filter(
      (i) => i !== id
    );

    super.remove(id);
  }

  getPlayerItems(playerId: number) {
    return this.#playerItems[playerId] || [];
  }
}
