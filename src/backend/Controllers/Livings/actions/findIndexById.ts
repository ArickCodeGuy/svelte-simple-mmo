import type { LivingsController } from '..';

export const useFindIndexById =
  (livingsController: LivingsController) => (id: number) => {
    const livingIndex = livingsController.livings.findIndex((i) => i.id === id);
    if (livingIndex === -1) throw new Error(`Living with id ${id} not found`);

    return livingIndex;
  };
