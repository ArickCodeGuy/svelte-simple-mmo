import type { Position } from '@/types';
import type { Living } from '../types';
import { getProtoById } from './getProtoById';
import type { LivingsTable } from '..';

export const useCreateFromId =
  (livingsTable: LivingsTable) =>
  (protoId: number, position: Position): Living => {
    const proto = getProtoById(protoId);

    const newLiving = {
      id: livingsTable.idGen(),
      protoId: proto.id,
      name: proto.name,
      lvl: proto.lvl,
      chp: proto.stats.hp,
      stats: proto.stats,
      position,
    };

    livingsTable.livings.push(newLiving);

    return newLiving;
  };
