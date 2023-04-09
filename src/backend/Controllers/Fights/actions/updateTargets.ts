import { FightController } from '..';

export const useUpdateTargets =
  (fightController: FightController) => (fightInstanceId: number) => {
    const instance = fightController.getComputedInstanceById(fightInstanceId);
    if (!instance) return;

    const members = [...instance.aliveTeamOne, ...instance.aliveTeamTwo].reduce<
      Record<string, number>
    >(
      (res, i) => ({
        ...res,
        [i.id]: i.id,
      }),
      {}
    );

    const newTargets = { ...instance.targets };

    Object.entries(instance.targets).forEach(([a, receiverId]) => {
      const attackerId = Number(a);
      if (!members[attackerId]) {
        delete newTargets[attackerId];
      }
      if (!members[receiverId]) {
        const receiverTeam =
          instance.aliveTeamOne.findIndex((i) => i.id === attackerId) === -1
            ? 'teamOne'
            : 'teamTwo';
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
