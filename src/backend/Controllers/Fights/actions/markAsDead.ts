import { FightController } from '..';

export const useMarkAsDead =
  (fightController: FightController) =>
  (fightInstanceId: number, livingId: number) => {
    fightController.update(fightInstanceId, (fightInstance) => ({
      ...fightInstance,
      members: {
        ...fightInstance.members,
        [livingId]: {
          ...fightInstance.members[livingId],
          isAlive: false,
        },
      },
    }));

    fightController.updateTargets(fightInstanceId);
  };
