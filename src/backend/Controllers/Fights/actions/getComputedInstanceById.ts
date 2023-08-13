import { FightController } from '..';
import type { ComputedFightInstance } from '../types';

export const useGetComputedInstanceById =
  (fightController: FightController) => (fightInstanceId: number) => {
    const instance = fightController.getById(fightInstanceId);

    return {
      ...instance,
      aliveTeamOne: instance.teamOne.filter((i) => instance.members[i].isAlive),
      aliveTeamTwo: instance.teamTwo.filter((i) => instance.members[i].isAlive),
    } as ComputedFightInstance;
  };
