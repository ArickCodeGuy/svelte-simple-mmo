import type { LivingsTable } from '..';
import type { Living } from '../types';

export const useUpdate =
  (livingsTable: LivingsTable) =>
  (id: number, newState: Living): Living => {
    const livingIndex = livingsTable.findIndexById(id);
    livingsTable.livings[livingIndex] = newState;
    return newState;
  };
