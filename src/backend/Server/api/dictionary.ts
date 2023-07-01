import type { Dictionary } from '@/types/types';
import type { ServerController } from '..';

export const useDictionary =
  (controller: ServerController) => (): Dictionary => {
    return {
      ...controller.mapController.mapCellTypes.dictionary(),
    };
  };
