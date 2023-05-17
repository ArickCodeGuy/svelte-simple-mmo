import type { ItemsController } from '..';
import items from '../protos/index';

export const useInit =
  (controller: ItemsController) =>
  /**
   * pushes default items to table from protos folder
   */
  () => {
    items.forEach((i) => controller.add(i));
    console.log(controller.getState());
  };
