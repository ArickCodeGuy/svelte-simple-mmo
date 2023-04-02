import protoToNpc from './protoToNpc';
import type { NPC, NPCProto } from './types';

const generateNpc = (proto: NPCProto) => {
  const npc = protoToNpc(proto);
  npcArr.push(npc);
  return npc;
};
const findNpcById = (npcId: number) => npcArr.find((npc) => npc.id === npcId);

export const npcActions = {
  generateNpc,
  findNpcById,
};

const npcArr: NPC[] = [];
