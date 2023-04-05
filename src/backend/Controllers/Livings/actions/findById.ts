import type { LivingsController } from '..';

export const useFindById =
  (livingsController: LivingsController) => (id: number) => {
    const living = livingsController.livings.find((living) => living.id === id);
    if (!living) throw new Error(`Living with id ${id} not found`);

    return living;
  };
