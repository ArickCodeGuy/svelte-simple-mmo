import type { LivingsController } from '..';
import type { DirectionalMove, Living } from '../types';

export const useDirectionalMove =
  (livingsController: LivingsController) =>
  (id: number, direction: DirectionalMove): Living => {
    const living = livingsController.findById(id);
    const newLivingState = JSON.parse(JSON.stringify(living));

    if (direction === 'UP') newLivingState.position.y -= 1;
    if (direction === 'DOWN') newLivingState.position.y += 1;
    if (direction === 'LEFT') newLivingState.position.x -= 1;
    if (direction === 'RIGHT') newLivingState.position.x += 1;

    livingsController.update(id, newLivingState);
    return newLivingState;
  };
