import type { Position } from '@/types';
import type { Living } from '../types';
import { getProtoById } from './getProtoById';
import type { LivingsController } from '..';

export const useCreateFromId =
  (livingsController: LivingsController) =>
  (protoId: number, position: Position): Living => {
    const proto = getProtoById(protoId);

    const newLiving = {
      protoId: proto.id,
      name: proto.name,
      lvl: proto.lvl,
      chp: proto.stats.hp,
      stats: proto.stats,
      position,
    };

    livingsController.add(newLiving);

    return newLiving;
  };
