import type { LivingsTable } from '..';

export const useFindIndexById =
  (livingsTable: LivingsTable) => (id: number) => {
    const livingIndex = livingsTable.livings.findIndex((i) => i.id === id);
    if (livingIndex === -1) throw new Error(`Living with id ${id} not found`);

    return livingIndex;
  };
