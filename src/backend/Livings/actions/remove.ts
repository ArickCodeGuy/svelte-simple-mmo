import type { LivingsTable } from '..';
import type { Living } from '../types';

export const useRemove = (livingsTable: LivingsTable) => (living: Living) => {
  livingsTable.livings = livingsTable.livings.filter((i) => i.id !== living.id);
};
