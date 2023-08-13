import { FightController } from '..';

export const useUpdateTargets =
  (fightController: FightController) => (fightInstanceId: number) => {
    const instance = fightController.getComputedInstanceById(fightInstanceId);

    /**
     * key - attacker
     * value - receiver
     */
    const members = {
      ...instance.aliveTeamOne.reduce<Record<number, 'aliveTeamOne'>>(
        (res, i) => ({
          ...res,
          [i]: 'aliveTeamOne',
        }),
        {}
      ),
      ...instance.aliveTeamTwo.reduce<Record<number, 'aliveTeamTwo'>>(
        (res, i) => ({
          ...res,
          [i]: 'aliveTeamTwo',
        }),
        {}
      ),
    };

    const newTargets = { ...instance.targets };

    Object.entries(instance.targets).forEach(([attackerId, receiverId]) => {
      // @ts-ignore
      if (!members[attackerId]) {
        // @ts-ignore
        delete newTargets[attackerId];
        return;
      }
      if (!members[receiverId]) {
        const receiverTeam =
          // @ts-ignore
          members[attackerId] === 'aliveTeamOne'
            ? 'aliveTeamTwo'
            : 'aliveTeamOne';

        // @ts-ignore
        newTargets[attackerId] = Math.floor(
          Math.random() * (instance[receiverTeam].length - 1)
        );
      }
    });

    fightController.update(fightInstanceId, (v) => ({
      ...v,
      targets: newTargets,
    }));
  };
