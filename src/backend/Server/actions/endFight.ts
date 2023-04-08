import type { ServerController } from '..';

export const useEndFight =
  (serverController: ServerController) => (id: number) => {
    console.log('END FIGHT');

    const fightInstance = serverController.fightController.getById(id)!;
    const members = [...fightInstance.teamOne, ...fightInstance.teamTwo];
    members.forEach((member) => {
      serverController.livingsController.update(member, (s) => ({
        ...s,
        activity: undefined,
        fightInstanceId: undefined,
      }));
    });

    serverController.fightController.remove(id);
  };
