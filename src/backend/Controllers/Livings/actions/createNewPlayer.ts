import type { LivingsController } from '..';
import type { Living } from '../types';
import { protoToDefaultLiving } from '../utils/protoToDefaultLiving';

export const useCreateNewPlayer =
  (controller: LivingsController) => (name: string) => {
    const playerProto = controller.livingsProtosController.getById(1);

    const newPlayer: Living = {
      ...protoToDefaultLiving(playerProto),
      name,
      statPoints: 10,
      position: {
        mapId: 1,
        x: 0,
        y: 0,
      },
    };

    return controller.add(newPlayer);
  };
