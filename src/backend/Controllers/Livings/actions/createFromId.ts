import type { Living, Position } from '../types';
import { getProtoById } from './getProtoById';
import type { LivingsController } from '..';
import { protoToDefaultLiving } from '../utils/protoToDefaultLiving';
import type { MapArea } from '../../Maps/types';
import { getRandomPositionFromArea } from '../../Maps/utils/getRandomPositionFromArea';

export const useCreateFromId =
  (livingsController: LivingsController) =>
  (protoId: number, position: Position, mapArea?: MapArea): Living => {
    const proto = getProtoById(protoId);

    let pos = { ...position };
    if (mapArea) {
      pos = {
        ...pos,
        ...getRandomPositionFromArea(mapArea),
      };
    }

    const newLiving: Living = {
      ...protoToDefaultLiving(proto),
      position: pos,
      mapArea,
    };

    livingsController.add(newLiving);

    return newLiving;
  };
