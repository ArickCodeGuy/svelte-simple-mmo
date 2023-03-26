import slug from '../npc/list/slug';
import protoToNpc from '../npc/protoToNpc';
import type { MapCell } from './types';

export default function (cellArr: MapCell[], npcAmount: number): void {
  for (let i = 0; i < npcAmount; i++) {
    const cellIndex = Math.floor(Math.random() * cellArr.length);

    cellArr[cellIndex].npcArr.push(protoToNpc(slug));
  }
}
