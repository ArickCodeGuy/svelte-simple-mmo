import protos from '../LivingsProtos/items';
import type { LivingProto } from '../LivingsProtos/types';

export const getProtoById = (id: number): LivingProto => {
  const proto = protos.find((proto) => proto.id === id);
  if (!proto) throw new Error(`Proto by id ${id} not found`);

  return proto;
};
