import type { Living, Position } from '../types';
import { getProtoById } from './getProtoById';
import type { LivingsController } from '..';
import { protoToDefaultLiving } from '../utils/protoToDefaultLiving';

export const useCreateFromId =
  (livingsController: LivingsController) =>
  (protoId: number, position: Position): Living => {
    const proto = getProtoById(protoId);

    const newLiving = {
      ...protoToDefaultLiving(proto),
      position,
    };

    livingsController.add(newLiving);

    return newLiving;
  };
