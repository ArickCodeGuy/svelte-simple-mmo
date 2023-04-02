import generateNpc from './generateNpc';
import type { MapCell, MapInfo } from './types';

const mapSize = 20;

const layout: MapCell[][] = [];
for (let i = 0; i < mapSize; i++) {
  layout.push([]);
  for (let j = 0; j < mapSize; j++) {
    const type = Math.random() > 0.1 ? 'LAND' : 'WATER';
    layout[i][j] = {
      type,
    };
  }
}

const map: MapInfo = {
  id: 0,
  layout,
};

generateNpc(100, map.id, 0, 0, map.layout.length - 1, map.layout[0].length - 1);

export default map;

export const fetchMap = (mapId: number): MapInfo => {
  return map;
};
