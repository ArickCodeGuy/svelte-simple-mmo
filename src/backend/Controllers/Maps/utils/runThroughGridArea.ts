import type { Position } from '../../Livings/types';

export type Options = {
  cb?: (pos: Position) => void;
  maxPos?: Position;
};

/**
 * @@TODO: figure out how to know max size of map
 */
export const runThroughGridArea = (
  p: Position,
  range = 1,
  options: Options = {}
) => {
  const yStart = p.y - range;
  const yEnd = p.y + range;
  const xStart = p.x - range;
  const xEnd = p.x + range;

  const maxPos: Options['maxPos'] = {
    mapId: 0,
    y: Infinity,
    x: Infinity,
  };

  for (let y = yStart; y <= yEnd; y++) {
    for (let x = xStart; x <= xEnd; x++) {
      if (y >= 0 && y <= maxPos.y && x >= 0 && x <= maxPos.x) {
        options.cb &&
          options.cb({
            mapId: p.mapId,
            x,
            y,
          });
      }
    }
  }
};
