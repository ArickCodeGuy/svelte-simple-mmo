import type { MapArea } from '../types';

export const getRandomPositionFromArea = (area: MapArea) => ({
  x: Math.floor(area.x + Math.random() * area.xRange),
  y: Math.floor(area.y + Math.random() * area.yRange),
});
