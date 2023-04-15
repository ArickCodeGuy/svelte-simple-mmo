import idGen from '@/utils/idGen';

export type BaseItem<T> = {
  id: number;
} & T;

export class BaseController<T> {
  #state: BaseItem<T>[];
  #idGen: ReturnType<typeof idGen>;
  #tableName: string;

  constructor(tableName: string) {
    this.#idGen = idGen();
    this.#state = [];
    this.#tableName = tableName;
  }
  getState() {
    return this.#state;
  }
  getById(id: number) {
    const i = this.#state.find((i) => i.id === id);
    if (!i) throw new Error(`getById: ${id}, in ${this.#tableName}`);
    return i;
  }
  getIndexById(id: number) {
    const i = this.#state.findIndex((i) => i.id === id);
    if (i === -1) throw new Error(`getIndexById: ${id}, in ${this.#tableName}`);
    return i;
  }
  add(i: T) {
    const newItem = {
      ...i,
      id: this.#idGen(),
    };
    this.#state.push(newItem);

    return newItem as BaseItem<T>;
  }
  remove(id: number) {
    this.#state = this.#state.filter((j) => j.id !== id);
  }
  update(
    id: number,
    updater: ((oldState: BaseItem<T>) => BaseItem<T>) | BaseItem<T>
  ) {
    const index = this.getIndexById(id);
    const oldState = this.#state[index];
    const newState =
      typeof updater === 'function' ? updater(oldState) : updater;
    this.#state[index] = newState;

    return newState;
  }
}
