import type { Dictionary } from '@/types/types';
import type { MapCellTypesController } from '..';

export const useDictionary =
  (controller: MapCellTypesController) => (): Dictionary => {
    return controller.getState().reduce(
      (res, i) => ({
        ...res,
        cellTypeColor: {
          ...res.cellTypeColor,
          [i.id]: i.color,
        },
        cellTypeName: {
          ...res.cellTypeName,
          [i.id]: i.name,
        },
      }),
      {
        cellTypeColor: {},
        cellTypeName: {},
      }
    );
  };
