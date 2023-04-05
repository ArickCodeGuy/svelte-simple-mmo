import type { MapCell, MapInfo } from '../types';

export const createDefaultMap = (): Omit<MapInfo, 'id'> => {
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

  const npcSettings = [
    {
      id: 2,
      amount: 100,
    },
  ];

  return {
    layout,
    npcSettings,
    height: mapSize,
    width: mapSize,
  };
};
