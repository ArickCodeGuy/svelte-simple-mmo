import type { ServerController } from '../..';

export const useFightTurn =
  (serverController: ServerController) => (fightInstanceId: number) => {
    import.meta.env.DEV && console.log('FIGHT TURN');
    const teamTurn = useTeamTurn(serverController);

    try {
      const fight = serverController.fightController.getById(fightInstanceId);
      serverController.fightLogActions.pushTurn(fight.logId);

      teamTurn('teamOne', fight.id);
      teamTurn('teamTwo', fight.id);

      const newFightState = serverController.fightController.updateTimeout(
        fight.id
      );

      window.setTimeout(() => {
        serverController.fightActions.turn(fight.id);
      }, newFightState.nextTurn - new Date().getTime());
    } catch (e) {
      // caused when teamTurn('teamTwo') is dead
      // or fightTurn when fight is over
    }
  };

const useTeamTurn =
  (serverController: ServerController) =>
  (team: 'teamOne' | 'teamTwo', fightId: number) => {
    const fight = serverController.fightController.getById(fightId);

    for (let i = 0; i < fight[team].length; i++) {
      const attackerId = fight[team][i];
      const receiverId = fight.targets[attackerId];
      const attackType = 0;

      // Don't do auto attack if it's a player
      if (
        serverController.livingsController.getById(attackerId).protoId === 1
      ) {
        continue;
      }

      const log = serverController.fightActions.attack(attackerId, attackType);

      serverController.fightLogActions.pushTurnAction(fight.logId, log);

      const receiverAfterAttack = serverController.livingsController.getById(
        fight.targets[attackerId]
      );
      if (receiverAfterAttack.health.current > 0) return;

      serverController.fightController.markAsDead(fight.id, receiverId);
      const deadTeam = serverController.fightController.isOneTeamDead(fight.id);
      if (deadTeam) {
        serverController.fightActions.end(fight.id, deadTeam);
      }
    }
  };
