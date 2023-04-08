import type { ServerController } from '..';

export const useInitFight =
  (serverController: ServerController) =>
  (teamOne: number[], teamTwo: number[]) => {
    const fightInstance = serverController.fightController.initFight(
      teamOne,
      teamTwo
    );
    const members = [...teamOne, ...teamTwo].forEach((memberId) => {
      serverController.livingsController.update(memberId, (member) => ({
        ...member,
        activity: 'FIGHT',
        fightInstanceId: fightInstance.id,
      }));
    });

    setTimeout(() => {
      serverController.fightTurn(fightInstance.id);
    }, fightInstance.nextTurn - new Date().getTime());
    return fightInstance;
  };
