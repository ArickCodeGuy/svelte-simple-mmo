import type { DirectionalMove, Living } from '../types';

export const directionalMove = (
  living: Living,
  direction: DirectionalMove
): Living => {
  const newLivingState = JSON.parse(JSON.stringify(living));

  if (direction === 'UP') newLivingState.position.y -= 1;
  if (direction === 'DOWN') newLivingState.position.y += 1;
  if (direction === 'LEFT') newLivingState.position.x -= 1;
  if (direction === 'RIGHT') newLivingState.position.x += 1;

  return newLivingState;
};
