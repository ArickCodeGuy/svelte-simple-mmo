import type { DirectionalMove, Living } from '../types';

export const directionalMove = (
  direction: DirectionalMove,
  living: Living
): Living => {
  const newLivingState = { ...living };

  if (direction === 'UP')
    newLivingState.position = { ...living.position, y: --living.position.y };
  if (direction === 'DOWN')
    newLivingState.position = { ...living.position, y: ++living.position.y };
  if (direction === 'LEFT')
    newLivingState.position = { ...living.position, x: --living.position.x };
  if (direction === 'RIGHT')
    newLivingState.position = { ...living.position, x: ++living.position.x };

  return newLivingState;
};
