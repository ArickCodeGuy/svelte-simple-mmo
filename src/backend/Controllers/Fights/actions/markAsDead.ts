import { FightController } from '..';

export const useMarkAsDead =
  (fightController: FightController) =>
  (fightInstanceId: number, livingId: number) => {
    fightController.update(fightInstanceId, (fightInstance) => ({
      ...fightInstance,
      teamOne: fightInstance.teamOne.filter((i) => i !== livingId),
      teamTwo: fightInstance.teamTwo.filter((i) => i !== livingId),
      members: {
        ...fightInstance.members,
        // Yea, it's bad
        [livingId]: {
          ...fightInstance.members[livingId],
          isAlive: false,
        },
      },
    }));

    fightController.updateTargets(fightInstanceId);
  };
