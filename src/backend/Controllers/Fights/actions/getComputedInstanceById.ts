import { FightController } from '..';
import type { ComputedFightInstance } from '../types';

export const useGetComputedInstanceById =
  (fightController: FightController) => (fightInstanceId: number) => {
    const instance = fightController.getById(fightInstanceId);

    return {
      ...instance,
      aliveTeamOne: instance.teamOne.filter((i) => i.isAlive),
      aliveTeamTwo: instance.teamTwo.filter((i) => i.isAlive),
    } as ComputedFightInstance;
  };
