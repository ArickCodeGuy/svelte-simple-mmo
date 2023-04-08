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
    return this.#state.find((i) => i.id === id);
  }
  getIndexById(id: number) {
    return this.#state.findIndex((i) => i.id === id);
  }
  add(i: T) {
    const id = this.#idGen();
    this.#state.push({
      ...i,
      id,
    });
    return id;
  }
  remove(id: number) {
    this.#state = this.#state.filter((j) => j.id !== id);
  }
  update(id: number, updater: ((i: BaseItem<T>) => BaseItem<T>) | BaseItem<T>) {
    const index = this.getIndexById(id);
    if (index === -1)
      throw new Error(`update: ${id} not found in ${this.#tableName} table`);
    const oldState = this.#state[index];
    const newState =
      typeof updater === 'function' ? updater(oldState) : updater;
    this.#state[index] = newState;

    return newState;
  }
}
