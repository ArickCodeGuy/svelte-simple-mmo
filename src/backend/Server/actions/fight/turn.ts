import { livingToFightLogMember } from '@/backend/Controllers/FightLogs/utils/livingToFightLogMember';
import type { ServerController } from '../..';

export const useFightTurn =
  (serverController: ServerController) => (fightInstanceId: number) => {
    console.log('FIGHT TURN');
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
      const member = fight[team][i];
      const receiverId = fight.targets[member.id];
      const attackType = 0;

      const log = serverController.fightActions.attack(
        member.id,
        fight.targets[member.id],
        attackType
      );

      serverController.fightLogActions.pushTurnAction(fight.logId, log);

      const receiverAfterAttack = serverController.livingsController.getById(
        fight.targets[member.id]
      );
      if (receiverAfterAttack.health.current > 0) return;

      serverController.fightController.markAsDead(fight.id, receiverId);
      const deadTeam = serverController.fightController.isOneTeamDead(fight.id);
      if (deadTeam) {
        serverController.fightActions.end(fight.id, deadTeam);
      }
    }
  };
