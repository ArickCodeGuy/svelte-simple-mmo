import generateNpc from './generateNpc';
import type { MapCell, MapInfo } from './types';

const mapSize = 20;

const layout: MapCell[][] = [];
for (let i = 0; i < mapSize; i++) {
  layout.push([]);
  for (let j = 0; j < mapSize; j++) {
    layout[i][j] = {
      type: 'LAND',
      npcArr: [],
    };
  }
}

const map: MapInfo = {
  id: 0,
  layout,
};

const mapCellArr: MapCell[] = map.layout.reduce((arr, i) => [...arr, ...i], []);

generateNpc(mapCellArr, 20);

export default map;

export const fetchMap = (mapId: number): MapInfo => {
  return map;
};
