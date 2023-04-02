import idGen from '../../utils/idGen';
import type { Player } from './types';

const createId = idGen();

export function createPlayer(name: string): Player {
  return {
    id: createId(),
    lvl: 1,
    name,
    position: {
      x: 0,
      y: 0,
      mapId: 0,
    },
    stats: {
      hp: 100,
      attack: 10,
    },
  };
}
