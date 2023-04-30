import type { ServerController } from '../..';

export const useFightTurn =
  (serverController: ServerController) => (id: number) => {
    console.log('FIGHT TURN');
    const teamTurn = useTeamTurn(serverController);

    try {
      const fight = serverController.fightController.getById(id);

      teamTurn('teamOne', fight.id);
      teamTurn('teamTwo', fight.id);

      const newFightState = serverController.fightController.updateTimeout(
        fight.id
      );

      window.setTimeout(() => {
        serverController.fightTurn(id);
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

      const attacker = serverController.livingsController.getById(member.id)!;
      const receiver = serverController.livingsController.getById(
        fight.targets[member.id]
      )!;

      const newReceiverState =
        serverController.livingsController.updateCurrentHealth(
          receiver.id,
          (v) => v - attacker.computedStats.attack
        );
      if (newReceiverState.computedStats.currentHealth > 0) return;

      serverController.fightController.markAsDead(fight.id, receiver.id);
      const deadTeam = serverController.fightController.isOneTeamDead(fight.id);
      if (deadTeam) {
        serverController.endFight(fight.id, deadTeam);
      }
    }
  };
