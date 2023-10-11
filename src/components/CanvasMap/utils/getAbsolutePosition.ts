import type { MazePosition } from '../types';
import type { useRenderOptions } from './useRenderOptions';

/**
 * Returns absolute position as if no translate and scale was applied
 */
export const getAbsolutePosition = (
  canvasPosition: MazePosition,
  options: ReturnType<typeof useRenderOptions>
): MazePosition => {
  const x = Math.floor(
    /* options.canvasMiddle + */
    (canvasPosition.x - options.canvasMiddle - (options.translate?.x || 0)) /
      options.scale
  );
  const y = Math.floor(
    /* options.canvasMiddle + */
    (canvasPosition.y - options.canvasMiddle - (options.translate?.y || 0)) /
      options.scale
  );

  return { x, y };
};
