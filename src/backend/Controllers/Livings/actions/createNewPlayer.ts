import type { LivingsController } from '..';
import type { Living } from '../types';
import { getProtoById } from './getProtoById';

export const useCreateNewPlayer =
  (livingsController: LivingsController) =>
  (name: string): Living => {
    const playerProto = getProtoById(0);

    const newPlayer = {
      id: livingsController.idGen(),
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

    livingsController.livings.push(newPlayer);

    return newPlayer;
  };
