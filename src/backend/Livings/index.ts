import type { Position } from '@/types';
import type { Living } from './types';
import idGen from '@/utils/idGen';
import { createFromId } from './actions/createFromId';
import { createNewPlayer } from './actions/createNewPlayer';

const createId = idGen();

const LivingsArr: Living[] = [];

export const livingsActions = {
  create: (protoId: number, position: Position) => {
    const newLivingId = createId();
    const living = createFromId(newLivingId, protoId, position);
    LivingsArr.push(living);
    return living;
  },
  createPlayer: (name: string) => {
    const newPlayerId = createId();
    const newPlayer = createNewPlayer(newPlayerId, name);
    LivingsArr.push(newPlayer);
    return newPlayer;
  },
  findById: (livingId: number) => {
    const living = LivingsArr.find((living) => living.id === livingId);
    if (!living) throw `Living with id ${livingId} not found`;

    return living;
  },
  getLivings: () => LivingsArr,
};
