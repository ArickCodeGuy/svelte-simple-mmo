import type { ServerController } from '..';

export const useEndFight =
  (serverController: ServerController) => (id: number) => {
    console.log('END FIGHT');

    const fightInstance = serverController.fightController.getById(id)!;
    const members = [...fightInstance.teamOne, ...fightInstance.teamTwo];
    members.forEach((member) => {
      serverController.livingsController.update(member.id, (s) => {
        const newState = { ...s };
        newState.lastUpdated = new Date().getTime();
        delete newState.fightInstanceId;
        return newState;
      });

      if (!member.isAlive) {
        serverController.respawn(member.id);
      }
    });

    serverController.fightController.remove(id);
  };
