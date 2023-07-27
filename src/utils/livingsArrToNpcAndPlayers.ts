import type { BaseItem } from '@/backend/Controllers/Base';
import type { Living } from '@/backend/Controllers/Livings/types';

export const livingsArrToNpcAndPlayers = (livingsArr: BaseItem<Living>[]) =>
  livingsArr.reduce<{ players: BaseItem<Living>[]; npc: BaseItem<Living>[] }>(
    (res, i) => {
      if (i.protoId === 1) res.players.push(i);
      else res.npc.push(i);
      return res;
    },
    {
      players: [],
      npc: [],
    }
  );
