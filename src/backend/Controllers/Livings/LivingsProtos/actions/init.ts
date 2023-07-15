import type { LivingsProtosController } from '..';
import protos from '../items';

export const useInit = (controller: LivingsProtosController) => () => {
  protos.forEach((i) => controller.add(i));
};
