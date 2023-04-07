import type { LivingsController } from '..';
import type { DirectionalMove } from '../types';

export const useDirectionalMove =
  (livingsController: LivingsController) =>
  (id: number, direction: DirectionalMove) => {
    console.log(id, direction);
    const living = livingsController.getById(id);

    const newLivingState = { ...living };

    if (direction === 'UP') newLivingState.position.y -= 1;
    if (direction === 'DOWN') newLivingState.position.y += 1;
    if (direction === 'LEFT') newLivingState.position.x -= 1;
    if (direction === 'RIGHT') newLivingState.position.x += 1;

    return newLivingState;
  };
