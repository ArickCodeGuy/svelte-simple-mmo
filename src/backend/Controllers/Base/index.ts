import idGen from '@/utils/idGen';

export class BaseController<T = any> {
  #state: T[];
  #idGen: ReturnType<typeof idGen>;

  constructor() {
    this.#idGen = idGen();
    this.#state = [];
  }
  get() {
    return this.#state;
  }
}
