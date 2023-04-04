import type { LivingsTable } from '..';
import type { Living } from '../types';
import { getProtoById } from './getProtoById';

export const useCreateNewPlayer =
  (livingsTable: LivingsTable) =>
  (name: string): Living => {
    const playerProto = getProtoById(0);

    const newPlayer = {
      id: livingsTable.idGen(),
      name,
      lvl: playerProto.lvl,
      protoId: playerProto.id,
      chp: playerProto.stats.hp,
      stats: {
        hp: playerProto.stats.hp,
        attack: playerProto.stats.attack,
      },
      position: {
        x: 10,
        y: 10,
        mapId: 1,
      },
    };

    livingsTable.livings.push(newPlayer);

    return newPlayer;
  };
