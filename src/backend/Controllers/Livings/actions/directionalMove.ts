import type { LivingsController } from '..';
import type { BaseItem } from '../../Base';
import type { DirectionalMove, Living } from '../types';

export const useDirectionalMove =
  (livingsController: LivingsController) =>
  (id: number, direction: DirectionalMove) => {
    const living = livingsController.getById(id)!;

    const newLivingState = JSON.parse(
      JSON.stringify(living)
    ) as BaseItem<Living>;

    if (direction === 'UP') newLivingState.position.y -= 1;
    if (direction === 'DOWN') newLivingState.position.y += 1;
    if (direction === 'LEFT') newLivingState.position.x -= 1;
    if (direction === 'RIGHT') newLivingState.position.x += 1;

    return newLivingState;
  };
