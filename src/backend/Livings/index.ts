import type { Position } from '@/types';
import type { DirectionalMove, Living } from './types';
import idGen from '@/utils/idGen';
import { createFromId } from './actions/createFromId';
import { createNewPlayer } from './actions/createNewPlayer';
import { directionalMove } from './actions/directionalMove';

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
  move: (direction: DirectionalMove, livingId: number) => {
    const livingIndex = LivingsArr.findIndex((i) => i.id === livingId);
    if (livingIndex === -1) throw `Living with id ${livingId} is not found`;
    const living = LivingsArr[livingIndex];

    const newLivingState = directionalMove(direction, living);
    LivingsArr[livingIndex] = newLivingState;
    return newLivingState;
  },
};
