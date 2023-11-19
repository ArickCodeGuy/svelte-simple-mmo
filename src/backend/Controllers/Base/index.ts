import type { Updater } from '@/backend/Server/types';
import { updaterFunction } from '@/backend/Server/utils/updaterFunction';
import idGen from '@/utils/idGen';

export type BaseItem<T> = T & {
  id: number;
};

export class BaseController<T> {
  #state: Record<string, BaseItem<T>>;
  #idGen: ReturnType<typeof idGen>;
  #tableName: string;

  constructor(tableName: string) {
    this.#idGen = idGen();
    this.#state = {};
    this.#tableName = tableName;
  }
  getState(): BaseItem<T>[] {
    return Object.values(this.#state);
  }
  getRawState() {
    return this.#state;
  }
  getById(id: number) {
    const i = this.#state[id];
    if (!i) {
      throw new Error(
        `Failed to getById: ${id}, in controller ${this.#tableName}`
      );
    }
    return i;
  }
  add(item: T): BaseItem<T> {
    const id = this.#idGen();

    const itemToAdd = {
      ...item,
      id,
    };
    this.#state[id] = itemToAdd;

    return itemToAdd;
  }
  remove(id: number) {
    if (!this.#state[id]) return;

    delete this.#state[id];
  }
  replace(id: number, item: BaseItem<T>) {
    this.#state[id] = item;
  }
  update(id: number, updater: Updater<BaseItem<T>>) {
    const item = this.getById(id);
    const newState = updaterFunction(updater, item);
    this.replace(id, newState);

    return newState;
  }
}
