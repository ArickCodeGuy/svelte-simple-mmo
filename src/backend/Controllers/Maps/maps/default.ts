import type { MazeMap } from '@/components/CanvasMap/types';
import type { MapInfo } from '../types';
import { REGULAR_TYPE_IDS } from '../constants';

export const DEFAULT_MAP_LAYOUT: MazeMap = {
  '0,0': { typeId: 1, position: { x: 0, y: 0 } },
  '0,1': { typeId: 1, position: { x: 0, y: 1 } },
  '1,1': { typeId: 3, position: { x: 1, y: 1 } },
  '0,-1': { typeId: 1, position: { x: 0, y: -1 } },
  '1,2': { typeId: 2, position: { x: 1, y: 2 } },
  '-1,-1': { typeId: 1, position: { x: -1, y: -1 } },
  '1,0': { typeId: 3, position: { x: 1, y: 0 } },
  '2,2': { typeId: 3, position: { x: 2, y: 2 } },
  '-1,1': { typeId: 2, position: { x: -1, y: 1 } },
  '-1,-2': { typeId: 3, position: { x: -1, y: -2 } },
  '0,2': { typeId: 2, position: { x: 0, y: 2 } },
  '3,2': { typeId: 2, position: { x: 3, y: 2 } },
  '-2,-2': { typeId: 3, position: { x: -2, y: -2 } },
  '3,3': { typeId: 3, position: { x: 3, y: 3 } },
  '4,3': { typeId: 2, position: { x: 4, y: 3 } },
  '-1,-3': { typeId: 1, position: { x: -1, y: -3 } },
  '-1,2': { typeId: 3, position: { x: -1, y: 2 } },
  '-2,2': { typeId: 1, position: { x: -2, y: 2 } },
  '4,4': { typeId: 3, position: { x: 4, y: 4 } },
  '0,3': { typeId: 3, position: { x: 0, y: 3 } },
  '4,2': { typeId: 2, position: { x: 4, y: 2 } },
  '-2,-3': { typeId: 1, position: { x: -2, y: -3 } },
  '-2,-4': { typeId: 1, position: { x: -2, y: -4 } },
  '5,4': { typeId: 1, position: { x: 5, y: 4 } },
  '4,1': { typeId: 3, position: { x: 4, y: 1 } },
  '0,-3': { typeId: 2, position: { x: 0, y: -3 } },
  '-3,-4': { typeId: 2, position: { x: -3, y: -4 } },
  '1,3': { typeId: 1, position: { x: 1, y: 3 } },
  '3,4': { typeId: 1, position: { x: 3, y: 4 } },
  '1,-1': { typeId: 1, position: { x: 1, y: -1 } },
  '3,5': { typeId: 1, position: { x: 3, y: 5 } },
  '-3,-5': { typeId: 1, position: { x: -3, y: -5 } },
  '-2,1': { typeId: 1, position: { x: -2, y: 1 } },
  '1,-2': { typeId: 2, position: { x: 1, y: -2 } },
  '2,-1': { typeId: 3, position: { x: 2, y: -1 } },
  '2,4': { typeId: 2, position: { x: 2, y: 4 } },
  '4,5': { typeId: 3, position: { x: 4, y: 5 } },
  '0,-2': { typeId: 1, position: { x: 0, y: -2 } },
  '5,2': { typeId: 1, position: { x: 5, y: 2 } },
  '3,-1': { typeId: 1, position: { x: 3, y: -1 } },
  '-3,-6': { typeId: 3, position: { x: -3, y: -6 } },
  '-2,-6': { typeId: 3, position: { x: -2, y: -6 } },
  '-3,-3': { typeId: 2, position: { x: -3, y: -3 } },
  '-2,-7': { typeId: 3, position: { x: -2, y: -7 } },
  '-3,-7': { typeId: 2, position: { x: -3, y: -7 } },
  '-2,-1': { typeId: 1, position: { x: -2, y: -1 } },
  '-3,-1': { typeId: 3, position: { x: -3, y: -1 } },
  '1,4': { typeId: 2, position: { x: 1, y: 4 } },
  '5,3': { typeId: 2, position: { x: 5, y: 3 } },
  '-4,-5': { typeId: 3, position: { x: -4, y: -5 } },
  '-2,3': { typeId: 1, position: { x: -2, y: 3 } },
  '-2,4': { typeId: 2, position: { x: -2, y: 4 } },
  '-4,-1': { typeId: 1, position: { x: -4, y: -1 } },
  '-3,-8': { typeId: 3, position: { x: -3, y: -8 } },
  '-1,-4': { typeId: 1, position: { x: -1, y: -4 } },
  '4,6': { typeId: 1, position: { x: 4, y: 6 } },
  '-3,-9': { typeId: 1, position: { x: -3, y: -9 } },
  '4,0': { typeId: 1, position: { x: 4, y: 0 } },
  '-2,-9': { typeId: 1, position: { x: -2, y: -9 } },
  '-2,-8': { typeId: 2, position: { x: -2, y: -8 } },
  '-3,0': { typeId: 1, position: { x: -3, y: 0 } },
  '2,3': { typeId: 3, position: { x: 2, y: 3 } },
  '-1,-5': { typeId: 1, position: { x: -1, y: -5 } },
  '3,1': { typeId: 2, position: { x: 3, y: 1 } },
  '2,1': { typeId: 2, position: { x: 2, y: 1 } },
  '-3,-10': { typeId: 3, position: { x: -3, y: -10 } },
  '-5,-5': { typeId: 3, position: { x: -5, y: -5 } },
  '-4,-10': { typeId: 1, position: { x: -4, y: -10 } },
  '-5,-10': { typeId: 1, position: { x: -5, y: -10 } },
  '-3,-2': { typeId: 1, position: { x: -3, y: -2 } },
  '2,-2': { typeId: 3, position: { x: 2, y: -2 } },
  '2,5': { typeId: 2, position: { x: 2, y: 5 } },
  '-1,4': { typeId: 3, position: { x: -1, y: 4 } },
  '1,5': { typeId: 1, position: { x: 1, y: 5 } },
  '3,0': { typeId: 3, position: { x: 3, y: 0 } },
  '5,6': { typeId: 1, position: { x: 5, y: 6 } },
  '-5,-11': { typeId: 3, position: { x: -5, y: -11 } },
  '4,7': { typeId: 1, position: { x: 4, y: 7 } },
  '-4,0': { typeId: 1, position: { x: -4, y: 0 } },
  '3,6': { typeId: 1, position: { x: 3, y: 6 } },
  '5,1': { typeId: 1, position: { x: 5, y: 1 } },
  '5,0': { typeId: 3, position: { x: 5, y: 0 } },
  '0,-4': { typeId: 1, position: { x: 0, y: -4 } },
  '-1,-7': { typeId: 2, position: { x: -1, y: -7 } },
  '-1,-8': { typeId: 3, position: { x: -1, y: -8 } },
  '-5,-1': { typeId: 1, position: { x: -5, y: -1 } },
  '3,-2': { typeId: 2, position: { x: 3, y: -2 } },
  '-5,-4': { typeId: 1, position: { x: -5, y: -4 } },
  '1,-4': { typeId: 2, position: { x: 1, y: -4 } },
  '-5,-6': { typeId: 1, position: { x: -5, y: -6 } },
  '-6,-5': { typeId: 2, position: { x: -6, y: -5 } },
  '0,-8': { typeId: 1, position: { x: 0, y: -8 } },
  '-3,4': { typeId: 1, position: { x: -3, y: 4 } },
  '-5,0': { typeId: 1, position: { x: -5, y: 0 } },
  '-2,0': { typeId: 2, position: { x: -2, y: 0 } },
  '6,4': { typeId: 3, position: { x: 6, y: 4 } },
  '5,5': { typeId: 3, position: { x: 5, y: 5 } },
  '-3,-11': { typeId: 1, position: { x: -3, y: -11 } },
  '4,-1': { typeId: 3, position: { x: 4, y: -1 } },
  '-3,1': { typeId: 1, position: { x: -3, y: 1 } },
  '6,1': { typeId: 1, position: { x: 6, y: 1 } },
};

const npcSettings: MapInfo['npcSettings'] = [
  {
    id: 2,
    area: Object.values(DEFAULT_MAP_LAYOUT)
      // spawn only on regular cells
      .filter((i) => REGULAR_TYPE_IDS[i.typeId])
      .map((i) => ({
        ...i.position,
        mapId: 1,
      })),
    amount: 100,
  },
];

export const DEFAULT_MAP_INFO: MapInfo = {
  layout: DEFAULT_MAP_LAYOUT,
  npcSettings,
};
