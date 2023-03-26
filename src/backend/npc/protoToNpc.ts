import idGen from '../../utils/idGen';
import type { NPC, NPCProto } from './types';

const createId = idGen();

export default (npc: NPCProto): NPC => ({
  protoId: npc.id,
  id: createId(),
  name: npc.name,
  lvl: npc.lvl,
  stats: { ...npc.stats },
});
