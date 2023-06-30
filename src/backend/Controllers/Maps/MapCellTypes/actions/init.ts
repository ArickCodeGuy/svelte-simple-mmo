import type { MapCellTypesController } from '..';
import cellTypeProtos from '../protos';

export const useInit = (controller: MapCellTypesController) => () => {
  cellTypeProtos.forEach((i) => controller.add(i));
};
