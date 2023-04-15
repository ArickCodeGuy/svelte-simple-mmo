import { FightController } from '..';

export const useIsOneTeamDead =
  (fightController: FightController) => (fightInstanceId: number) => {
    const instance = fightController.getComputedInstanceById(fightInstanceId);

    if (!instance.aliveTeamOne.length) return 'teamOne';
    if (!instance.aliveTeamTwo.length) return 'teamTwo';
  };
