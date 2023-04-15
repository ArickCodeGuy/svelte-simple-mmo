import type { ServerController } from '..';

export const useFightTurn =
  (serverController: ServerController) => (id: number) => {
    console.log('FIGHT TURN');
    const teamTurn = useTeamTurn(serverController);

    const fight = serverController.fightController.getById(id);
    if (!fight) return;

    teamTurn('teamOne', fight.id);
    teamTurn('teamTwo', fight.id);

    const newFightState = serverController.fightController.updateTimeout(
      fight.id
    );
    if (!newFightState) return;
    setTimeout(() => {
      serverController.fightTurn(newFightState.id);
    }, newFightState.nextTurn - new Date().getTime());
  };

const useTeamTurn =
  (serverController: ServerController) =>
  (team: 'teamOne' | 'teamTwo', fightId: number) => {
    const fight = serverController.fightController.getById(fightId);
    if (!fight) return;

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
