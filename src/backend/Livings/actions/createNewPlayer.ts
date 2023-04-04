import type { Living } from '../types';
import { getProtoById } from './getProtoById';

export const createNewPlayer = (name: string): Omit<Living, 'id'> => {
  const playerProto = getProtoById(0);

  return {
    name,
    lvl: playerProto.lvl,
    protoId: playerProto.id,
    chp: playerProto.stats.hp,
    stats: {
      hp: playerProto.stats.hp,
      attack: playerProto.stats.attack,
    },
    position: {
      x: 0,
      y: 0,
      mapId: 1,
    },
  };
};
