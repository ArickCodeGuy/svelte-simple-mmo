import type { Position } from '@/types';
import type { Living } from '../types';
import { getProtoById } from './getProtoById';

export const createFromId = (
  newLivingId: number,
  protoId: number,
  position: Position
): Living => {
  const proto = getProtoById(protoId);

  return {
    id: newLivingId,
    protoId: proto.id,
    name: proto.name,
    lvl: proto.lvl,
    chp: proto.stats.hp,
    stats: proto.stats,
    position,
  };
};
