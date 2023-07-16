import type { ItemsProtosController } from '..';
import protos from '../items';

export const useInit = (controller: ItemsProtosController) => () => {
  protos.forEach((i) => controller.add(i));
};
