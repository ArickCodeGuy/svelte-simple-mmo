import type { ServerController } from '../..';
import type { FightInfo } from '../../types';

export const useGetFightInfo =
  (serverController: ServerController) =>
  (livingId: number): FightInfo | undefined => {
    const living = serverController.livingsController.getById(livingId);
    if (!living.fightInstanceId) return;

    const fightInstance = serverController.fightController.getById(
      living.fightInstanceId
    );

    const allyTeam =
      fightInstance.teamOne.findIndex((i) => i === living.id) === -1
        ? 'teamTwo'
        : 'teamOne';
    const enemyTeam = allyTeam === 'teamOne' ? 'teamTwo' : 'teamOne';
    const teams = {
      ally: fightInstance[allyTeam].map((i) =>
        serverController.livingsController.getById(i)
      ),
      enemy: fightInstance[enemyTeam].map((i) =>
        serverController.livingsController.getById(i)
      ),
    };

    const log = serverController.fightLogController.getById(
      fightInstance.logId
    );

    return {
      instance: fightInstance,
      teams,
      log,
    };
  };
