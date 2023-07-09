import type { MapCell, MapInfo } from '../types';

export const createDefaultMap = (): Omit<MapInfo, 'id'> => {
  const mapSize = 20;

  const layout: MapCell[][] = [];
  for (let i = 0; i < mapSize; i++) {
    layout.push([]);
    for (let j = 0; j < mapSize; j++) {
      let typeId = 1;
      const rand = Math.random();
      if (rand < 0.1) {
        typeId = 2;
      }
      if (rand < 0.05) {
        typeId = 3;
      }

      layout[i][j] = {
        typeId,
      };
    }
  }

  const npcSettings = [
    {
      id: 2,
      amount: 100,
    },
  ];

  /**
   * DEFAULT_RESPAWN_POSITION
   */
  layout[0][0].typeId = 4;

  return {
    layout,
    npcSettings,
    height: mapSize,
    width: mapSize,
  };
};
