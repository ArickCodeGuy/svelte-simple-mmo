import type { LivingsController } from '..';
import { getProtoById } from './getProtoById';

export const useCreateNewPlayer =
  (livingsController: LivingsController) => (name: string) => {
    const playerProto = getProtoById(0);

    const newPlayer = {
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

    const id = livingsController.add(newPlayer);

    return livingsController.getById(id)!;
  };
