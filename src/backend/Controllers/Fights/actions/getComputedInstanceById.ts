import { FightController } from '..';
import { ComputedFightInstance } from '../types';

export const useGetComputedInstanceById =
  (fightController: FightController) => (fightInstanceId: number) => {
    const instance = fightController.getById(fightInstanceId);
    if (!instance) return;

    return {
      ...instance,
      aliveTeamOne: instance.teamOne.filter((i) => i.isAlive),
      aliveTeamTwo: instance.teamTwo.filter((i) => i.isAlive),
    } as ComputedFightInstance;
  };
