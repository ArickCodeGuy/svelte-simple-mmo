import type { FightTable } from '..';
import type { FightInstance } from '../types';

export const useInitFight =
  (fightTable: FightTable) =>
  (teamOne: number[], teamTwo: number[]): FightInstance => {
    const fightInstance = {
      id: fightTable.idGen(),
      teamOne,
      teamTwo,
    };
    fightTable.fights.push(fightInstance);
    return fightInstance;
  };
