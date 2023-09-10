import { FightController } from '..';

export const useIsOneTeamDead =
  (fightController: FightController) =>
  (fightInstanceId: number): boolean => {
    const instance = fightController.getById(fightInstanceId);

    if (!instance.teamOne.length) return true;
    if (!instance.teamTwo.length) return true;

    return false;
  };
