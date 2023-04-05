import type { FightController } from '..';
import type { FightInstance } from '../types';

export const useInitFight =
  (fightController: FightController) =>
  (teamOne: number[], teamTwo: number[]): FightInstance => {
    const fightInstance = {
      id: fightController.idGen(),
      teamOne,
      teamTwo,
    };
    fightController.fights.push(fightInstance);
    return fightInstance;
  };
