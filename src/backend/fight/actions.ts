import idGen from '@/utils/idGen';
import type { FightInstance } from './types';
import { livingsActions } from '../Livings';

const currentFights: FightInstance[] = [];

const genId = idGen();

const initFight = (teamOneIds: number[], teamTwoIds: number[]) => {
  const teamOne = teamOneIds.map(livingsActions.findById);
  const teamTwo = teamTwoIds.map(livingsActions.findById);

  const fightInstance: FightInstance = {
    id: genId(),
    teamOne,
    teamTwo,
  };

  currentFights.push(fightInstance);

  return fightInstance;
};

const getById = (fightId: number) => {
  const fight = currentFights.find((i) => i.id === fightId);
  if (!fight) throw new Error(`Fight instance with id ${fightId} is not found`);

  return fight;
};

export const fightActions = {
  initFight,
  getById,
};
