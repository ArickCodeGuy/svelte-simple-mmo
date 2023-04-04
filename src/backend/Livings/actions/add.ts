import type { LivingsTable } from '..';
import type { Living } from '../types';

export const useAdd = (livingsTable: LivingsTable) => (living: Living) => {
  livingsTable.livings.push(living);
};
