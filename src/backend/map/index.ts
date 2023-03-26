import generateNpc from './generateNpc';
import type { MapCell, MapType } from './types';

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

const map: MapType = {
  id: 0,
  layout,
};

const mapCellArr: MapCell[] = map.layout.reduce((arr, i) => [...arr, ...i], []);

generateNpc(mapCellArr, 20);

export default map;
