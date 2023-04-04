import type { Position } from '@/types';
import type { Living } from '../types';
import { getProtoById } from './getProtoById';

export const createFromId = (
  protoId: number,
  position: Position
): Omit<Living, 'id'> => {
  const proto = getProtoById(protoId);

  return {
    protoId: proto.id,
    name: proto.name,
    lvl: proto.lvl,
    chp: proto.stats.hp,
    stats: proto.stats,
    position,
  };
};
