import { randomItemFromArray } from '@/utils/randomItemFromArray';
import type { ServerController } from '../..';

export const useFightEnd =
  (serverController: ServerController) => (id: number) => {
    import.meta.env.DEV && console.log('END FIGHT');

    const fightInstance = serverController.fightController.getById(id);

    const winnerTeam = fightInstance.teamOne.length ? 'teamOne' : 'teamTwo';
    const deadTeam = winnerTeam === 'teamOne' ? 'teamTwo' : 'teamOne';

    const winners = fightInstance[winnerTeam];
    const loosers = fightInstance[deadTeam];
    const members = [...winners, ...loosers];

    const expOfDeadTeam = serverController.fightActions.getTeamExp(
      fightInstance[deadTeam]
    );
    const expPerMember = Math.round(expOfDeadTeam / winners.length);

    winners.forEach((id) =>
      serverController.livingsController.updateExp(id, expPerMember)
    );

    loosers.forEach((id) => {
      const items = serverController.livingActions.getDrops(id);
      items.forEach((i) => {
        const winner = randomItemFromArray(winners);

        serverController.itemsController.update(i.id, (v) => ({
          ...v,
          playerId: winner,
        }));
      });
    });

    members.forEach((member) => {
      serverController.livingsController.update(member, (s) => {
        const newState = { ...s };
        delete newState.fightInstanceId;

        return newState;
      });

      if (!fightInstance.members[member].isAlive) {
        serverController.respawn(member);
      }
    });

    serverController.fightController.remove(id);
  };
