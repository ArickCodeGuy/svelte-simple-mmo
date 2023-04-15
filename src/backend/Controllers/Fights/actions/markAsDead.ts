import { FightController } from '..';

export const useMarkAsDead =
  (fightController: FightController) =>
  (fightInstanceId: number, livingId: number) => {
    fightController.update(fightInstanceId, (fightInstance) => {
      const newState = { ...fightInstance };

      let livingIndex = fightInstance.teamOne.findIndex(
        (i) => i.id === livingId
      );
      const removeTeam = livingIndex === -1 ? 'teamTwo' : 'teamOne';

      if (livingIndex === -1) {
        livingIndex = fightInstance.teamTwo.findIndex((i) => i.id === livingId);
      }

      fightInstance[removeTeam][livingIndex] = {
        ...fightInstance[removeTeam][livingIndex],
        isAlive: false,
      };

      return newState;
    });

    fightController.updateTargets(fightInstanceId);
  };
