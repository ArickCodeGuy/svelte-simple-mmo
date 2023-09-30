import { FightController } from '..';
import { getAliveTeamMembers } from '../utils/getAliveTeamMembers';

export const useIsOneTeamDead =
  (fightController: FightController) =>
  (fightInstanceId: number): boolean => {
    const instance = fightController.getById(fightInstanceId);

    if (!getAliveTeamMembers(instance.teamOne, instance.members).length)
      return true;
    if (!getAliveTeamMembers(instance.teamTwo, instance.members).length)
      return true;

    return false;
  };
