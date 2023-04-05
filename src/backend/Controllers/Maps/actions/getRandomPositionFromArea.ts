import type { MapController } from '..';
import type { MapArea } from '../types';

export const useGetRandomPositionFromArea =
  (mapController: MapController) => (area: MapArea) => ({
    x: Math.floor(area.x + Math.random() * area.xRange),
    y: Math.floor(area.y + Math.random() * area.yRange),
  });
