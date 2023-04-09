import type { LivingsController } from '..';
import { protoToDefaultLiving } from '../utils/protoToDefaultLiving';
import { getProtoById } from './getProtoById';

export const useCreateNewPlayer =
  (livingsController: LivingsController) => (name: string) => {
    const playerProto = getProtoById(0);

    const newPlayer = {
      ...protoToDefaultLiving(playerProto),
      name,
      points: 10,
      position: {
        mapId: 1,
        x: 10,
        y: 10,
      },
    };

    const id = livingsController.add(newPlayer);

    return livingsController.getById(id)!;
  };
