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

      const chp = receiver.currentHp - attacker.computedStats.attack;
      if (chp <= 0) {
        serverController.respawn(receiver.id);

        // remove from fight
        const newReceiverMembers = fight.teamTwo.filter(
          (i) => i.id !== receiver.id
        );

        if (!newReceiverMembers.length) {
          serverController.fightController.update(fight.id, (v) => ({
            ...v,
            [receiverSideKey]: [],
          }));
          serverController.endFight(fight.id);
          return;
        }

        const newTargets = Object.entries(fight.targets).reduce<Targets>(
          (res, [attackerId, receiverId]) => ({
            ...res,
            [attackerId]:
              receiverId === receiver.id
                ? newReceiverMembers[
                    Math.floor(Math.random() * newReceiverMembers.length)
                  ]
                : receiverId,
          }),
          {}
        );

        serverController.fightController.update(fight.id, (state) => ({
          ...state,
          [receiverSideKey]: state[receiverSideKey].filter(
            (i) => i.id !== receiver.id
          ),
          targets: newTargets,
          nextTurn: new Date().getTime() + FIGHT_TURN_TIMEOUT,
        }));
      } else {
        serverController.livingsController.update(receiver.id, (s) => ({
          ...s,
          chp,
        }));
      }
    }
  };
