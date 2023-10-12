import type { Living, Position } from '../types';
import type { LivingsController } from '..';
import { protoToDefaultLiving } from '../utils/protoToDefaultLiving';
import type { MapArea } from '../../Maps/types';

export const useCreateNpc =
  (controller: LivingsController) =>
  (protoId: number, position: Position, mapArea?: MapArea) => {
    const proto = controller.livingsProtosController.getById(protoId);

    const newLiving: Living = {
      ...protoToDefaultLiving(proto),
      position,
      mapArea,
    };

    return controller.add(newLiving);
  };
