import type { Living } from '../types';
import { getProtoById } from './getProtoById';

export const createNewPlayer = (newPlayerId: number, name: string): Living => {
  const playerProto = getProtoById(0);

  return {
    id: newPlayerId,
    name,
    lvl: playerProto.lvl,
    protoId: 0,
    chp: playerProto.stats.hp,
    stats: {
      hp: playerProto.stats.hp,
      attack: playerProto.stats.attack,
    },
    position: {
      x: 0,
      y: 0,
      mapId: 0,
    },
  };
};
