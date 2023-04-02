import idGen from '@/utils/idGen';
import type { BaseProto } from '../aliveEntity/types';
import type { FightInstance } from './types';

const genId = idGen();

const initFight = (teamOne: BaseProto[], teamTwo: BaseProto[]) => {
  const fightInstance: FightInstance = {
    id: genId(),
    teamOne,
    teamTwo,
  };

  currentFights.push(fightInstance);
};

export const fightActions = {
  initFight,
};

const currentFights: FightInstance[] = [];
