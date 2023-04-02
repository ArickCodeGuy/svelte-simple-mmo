import { npcActions } from '../npc/actions';
import slug from '../npc/list/slug';
import type { MapCell } from './types';

export default function (cellArr: MapCell[], npcAmount: number): void {
  for (let i = 0; i < npcAmount; i++) {
    const cellIndex = Math.floor(Math.random() * cellArr.length);

    cellArr[cellIndex].npcArr.push(npcActions.generateNpc(slug));
  }
}
