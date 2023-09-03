import type { ServerController } from '../..';
import { livingToFightLogMember } from '@/backend/Controllers/FightLogs/utils/livingToFightLogMember';
import type {
  FightInstance,
  TeamsMembers,
} from '@/backend/Controllers/Fights/types';
import { teamsToTargets } from '@/backend/Controllers/Fights/utils/teamsToTargets';
import { FIGHT_TURN_TIMEOUT } from '@/backend/Controllers/Fights/constants';

export const useFightInit =
  (serverController: ServerController) =>
  (teamOneIds: number[], teamTwoIds: number[]) => {
    import.meta.env.DEV && console.log('INIT FIGHT');

    const fightLogInstance = serverController.fightLogController.add({
      teamOne: teamOneIds.map((id) =>
        livingToFightLogMember(serverController.livingsController.getById(id))
      ),
      teamTwo: teamOneIds.map((id) =>
        livingToFightLogMember(serverController.livingsController.getById(id))
      ),
      turns: [],
    });

    const members: TeamsMembers = [...teamOneIds, ...teamTwoIds].reduce(
      (res, id) => ({
        ...res,
        [id]: {
          id,
          isAlive: true,
        },
      }),
      {}
    );

    const fightInstance: FightInstance = {
      teamOne: teamOneIds,
      teamTwo: teamTwoIds,
      targets: teamsToTargets(teamOneIds, teamTwoIds),
      members,
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
