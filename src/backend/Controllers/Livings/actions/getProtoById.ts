import protos from '../protos';
import type { LivingProto } from '../types';

export const getProtoById = (id: number): LivingProto => {
  const proto = protos.find((proto) => proto.id === id);
  if (!proto) throw new Error(`Proto by id ${id} not found`);

  return proto;
};
