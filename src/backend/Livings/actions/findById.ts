import type { LivingsTable } from '..';

export const useFindById = (livingsTable: LivingsTable) => (id: number) => {
  const living = livingsTable.livings.find((living) => living.id === id);
  if (!living) throw new Error(`Living with id ${id} not found`);

  return living;
};
