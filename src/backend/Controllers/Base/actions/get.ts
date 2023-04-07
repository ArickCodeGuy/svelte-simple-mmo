import type { BaseController } from '..';

export const useGet = (controller: BaseController) =>
  function () {
    return controller.#state;
  };
