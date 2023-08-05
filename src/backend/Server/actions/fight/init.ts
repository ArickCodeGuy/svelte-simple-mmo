import type { ServerController } from '../..';
import { livingToFightLogMember } from '@/backend/Controllers/FightLogs/utils/livingToFightLogMember';
import type { FightInstance } from '@/backend/Controllers/Fights/types';
import { teamsToTargets } from '@/backend/Controllers/Fights/utils/teamsToTargets';
import { FIGHT_TURN_TIMEOUT } from '@/backend/Controllers/Fights/constants';

export const useFightInit =
  (serverController: ServerController) =>
  (teamOneIds: number[], teamTwoIds: number[]) => {
    console.log('INIT FIGHT');

    const fightLogInstance = serverController.fightLogController.add({
      teamOne: teamOneIds.map((id) =>
        livingToFightLogMember(serverController.livingsController.getById(id))
      ),
      teamTwo: teamOneIds.map((id) =>
        livingToFightLogMember(serverController.livingsController.getById(id))
      ),
      turns: [],
    });

    const fightInstance: FightInstance = {
      teamOne: teamOneIds.map((id) => ({ id, isAlive: true })),
      teamTwo: teamTwoIds.map((id) => ({ id, isAlive: true })),
      targets: teamsToTargets(teamOneIds, teamTwoIds),
      nextTurn: new Date().getTime() + FIGHT_TURN_TIMEOUT,
      logId: fightLogInstance.id,
    };

    const { id: fightInstanceId } =
      serverController.fightController.add(fightInstance);

    [...teamOneIds, ...teamTwoIds].forEach((memberId) => {
      serverController.livingsController.update(memberId, (member) => ({
        ...member,
        activity: 'FIGHT',
        fightInstanceId,
        fightLogs: member.fightLogs
          ? [...member.fightLogs, fightLogInstance.id]
          : [fightLogInstance.id],
      }));
    });

    setTimeout(() => {
      serverController.fightActions.turn(fightInstanceId);
    }, fightInstance.nextTurn - new Date().getTime());
  };
