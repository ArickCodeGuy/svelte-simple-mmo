import type { Targets } from '@/backend/Controllers/Fights/types';
import type { ServerController } from '..';

export const useFightTurn = (serverController: ServerController) => () => {
  const teamTurn = useTeamTurn(serverController);

  serverController.fightController.getState().forEach((fight) => {
    teamTurn('teamOne', fight.id);
    if (!serverController.fightController.getById(fight.id)) {
      console.log('END FIGHT');
      return;
    }

    teamTurn('teamTwo', fight.id);
  });
};

const useTeamTurn =
  (serverController: ServerController) =>
  (team: 'teamOne' | 'teamTwo', fightId: number) => {
    const receiverSide = team === 'teamOne' ? 'teamTwo' : 'teamOne';

    const fight = serverController.fightController.getById(fightId);
    if (!fight) return;

    for (let i = 0; i < fight[team].length; i++) {
      const memberId = fight[team][i];

      const attacker = serverController.livingsController.getById(memberId)!;
      const receiver = serverController.livingsController.getById(
        fight.targets[memberId]
      )!;

      const chp = receiver.chp - attacker.stats.attack;
      if (chp <= 0) {
        serverController.livingsController.remove(receiver.id);

        // remove from fight
        const newReceiverMembers = fight.teamTwo.filter(
          (i) => i !== receiver.id
        );

        if (!newReceiverMembers.length) {
          serverController.fightController.remove(fight.id);

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
          [receiverSide]: state[receiverSide].filter((i) => i !== receiver.id),
          targets: newTargets,
        }));
      } else {
        serverController.livingsController.update(receiver.id, (s) => ({
          ...s,
          chp,
        }));
      }
    }
  };
