import type { Targets } from '@/backend/Controllers/Fights/types';
import type { ServerController } from '..';
import { FIGHT_TURN_TIMEOUT } from '@/backend/Controllers/Fights/constants';

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

    const receiverSideKey = team === 'teamOne' ? 'teamTwo' : 'teamOne';
    const attackers = fight[team];

    for (let i = 0; i < fight[team].length; i++) {
      const member = fight[team][i];

      const attacker = serverController.livingsController.getById(member.id)!;
      const receiver = serverController.livingsController.getById(
        fight.targets[member.id]
      )!;

      const currentHp = receiver.currentHp - attacker.computedStats.attack;
      if (currentHp <= 0) {
        serverController.fightController.markAsDead(fight.id, receiver.id);
        if (serverController.fightController.isOneTeamDead(fight.id)) {
          serverController.endFight(fight.id);
          return;
        }
      } else {
        serverController.livingsController.update(receiver.id, (s) => ({
          ...s,
          currentHp,
        }));
      }
    }
  };
