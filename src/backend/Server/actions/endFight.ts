import type { ServerController } from '..';

export const useEndFight =
  (serverController: ServerController) => (id: number) => {
    console.log('END FIGHT');

    const fightInstance = serverController.fightController.getById(id)!;
    const members = [...fightInstance.teamOne, ...fightInstance.teamTwo];
    members.forEach((member) => {
      serverController.livingsController.update(member.id, (s) => {
        delete s.fightInstanceId;
        return s;
      });
    });

    serverController.fightController.remove(id);
  };
