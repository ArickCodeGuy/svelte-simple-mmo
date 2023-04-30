import type { ServerController } from '../..';
import type { FightInfo } from '../../types';

export const useGetFightInfo =
  (serverController: ServerController) =>
  (livingId: number): FightInfo | undefined => {
    const living = serverController.livingsController.getById(livingId);
    if (!living.fightInstanceId) return;

    const instance = serverController.fightController.getById(
      living.fightInstanceId
    );

    const allyTeam =
      instance.teamOne.findIndex((i) => i.id === living.id) === -1
        ? 'teamTwo'
        : 'teamOne';
    const enemyTeam = allyTeam === 'teamOne' ? 'teamTwo' : 'teamOne';
    const teams = {
      ally: instance[allyTeam].map(
        (i) => serverController.livingsController.getById(i.id)!
      ),
      enemy: instance[enemyTeam].map(
        (i) => serverController.livingsController.getById(i.id)!
      ),
    };

    return {
      instance,
      teams,
    };
  };
