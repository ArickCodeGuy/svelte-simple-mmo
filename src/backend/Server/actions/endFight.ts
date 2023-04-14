import type { ServerController } from '..';

export const useEndFight =
  (serverController: ServerController) =>
  (id: number, deadTeam: 'teamOne' | 'teamTwo') => {
    console.log('END FIGHT');
    const winnerTeam = deadTeam === 'teamOne' ? 'teamTwo' : 'teamOne';

    const fightInstance = serverController.fightController.getById(id)!;
    const winners = fightInstance[winnerTeam];
    const loosers = fightInstance[deadTeam];
    const members = [...winners, ...loosers];

    const expOfDeadTeam = serverController.getTeamExp(fightInstance[deadTeam]);
    const expPerMember = Math.round(expOfDeadTeam / winners.length);

    winners.forEach((i) =>
      serverController.livingsController.updateExp(i.id, expPerMember)
    );

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
