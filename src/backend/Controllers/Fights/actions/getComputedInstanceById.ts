import { FightController } from '..';
import type { ComputedFightInstance } from '../types';
import { getAliveTeamMembers } from '../utils/getAliveTeamMembers';

export const useGetComputedInstanceById =
  (fightController: FightController) =>
  (fightInstanceId: number): ComputedFightInstance => {
    const instance = fightController.getById(fightInstanceId);

    return {
      ...instance,
      aliveTeamOne: getAliveTeamMembers(instance.teamOne, instance.members),
      aliveTeamTwo: getAliveTeamMembers(instance.teamTwo, instance.members),
    } as ComputedFightInstance;
  };
