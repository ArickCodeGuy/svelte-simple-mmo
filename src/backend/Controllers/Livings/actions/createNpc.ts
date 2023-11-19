import type { Living } from '../types';
import type { LivingsController } from '..';
import { protoToDefaultLiving } from '../utils/protoToDefaultLiving';
import { randomItemFromArray } from '@/utils/randomItemFromArray';

export const useCreateNpc =
  (controller: LivingsController) =>
  (protoId: number, area: Living['respawn']) => {
    if (!area) return;

    const position = Array.isArray(area) ? randomItemFromArray(area) : area;
    const proto = controller.livingsProtosController.getById(protoId);

    const newLiving: Living = {
      ...protoToDefaultLiving(proto),
      position,
      respawn: area,
    };

    return controller.add(newLiving);
  };
