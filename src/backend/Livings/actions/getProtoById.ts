import protos from '../protos';
import type { LivingProto } from '../types';

export const getProtoById = (protoId: number): LivingProto => {
  const proto = protos.find((proto) => proto.id === protoId);
  if (!proto) throw `Proto by id ${protoId} not found`;

  return proto;
};
