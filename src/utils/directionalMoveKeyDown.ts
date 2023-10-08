import type { DirectionalMove } from '@/backend/Controllers/Livings/types';

export const directionalMoveKeyDown = (
  e: KeyboardEvent
): DirectionalMove | undefined => {
  if (e.key.toLowerCase() === 'w' || e.key === 'ArrowUp') return 'UP';
  if (e.key.toLowerCase() === 'a' || e.key === 'ArrowLeft') return 'LEFT';
  if (e.key.toLowerCase() === 's' || e.key === 'ArrowDown') return 'DOWN';
  if (e.key.toLowerCase() === 'd' || e.key === 'ArrowRight') return 'RIGHT';
};
