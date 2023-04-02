import type { BaseProto } from '../aliveEntity/types';

export type NPCProto = BaseProto;

export type NPC = {
  protoId: number;
} & NPCProto;
