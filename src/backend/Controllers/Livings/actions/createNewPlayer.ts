import type { LivingsController } from '..';
import type { Living } from '../types';
import { protoToDefaultLiving } from '../utils/protoToDefaultLiving';
import { getProtoById } from './getProtoById';

export const useCreateNewPlayer =
  (livingsController: LivingsController) => (name: string) => {
    const playerProto = getProtoById(0);

    const newPlayer: Living = {
      ...protoToDefaultLiving(playerProto),
      name,
      statPoints: 10,
      position: {
        mapId: 1,
        x: 10,
        y: 10,
      },
    };

    return livingsController.add(newPlayer);
  };
