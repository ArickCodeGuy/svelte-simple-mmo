import { FightController } from '..';

export const useIsOneTeamDead =
  (fightController: FightController) => (fightInstanceId: number) => {
    const instance = fightController.getById(fightInstanceId);
    if (!instance) return;

    if (!instance.teamOne.filter((i) => i.isAlive).length) return 'teamOne';
    if (!instance.teamTwo.filter((i) => i.isAlive).length) return 'teamTwo';
    return false;
  };
