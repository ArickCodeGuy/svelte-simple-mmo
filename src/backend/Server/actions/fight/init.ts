import type { ServerController } from '../..';
import type { FightInstance } from '@/backend/Controllers/Fights/types';
import { teamsToTargets } from '@/backend/Controllers/Fights/utils/teamsToTargets';
import { FIGHT_TURN_TIMEOUT } from '@/backend/Controllers/Fights/constants';
import { teamIdsToTeamsMembers } from '../../utils/teamIdsToTeamsMembers';
import { teamIdsToFighLogMembers } from '../../utils/teamIdsToFighLogMembers';

export const useFightInit =
  (serverController: ServerController) =>
  (teamOneIds: number[], teamTwoIds: number[]) => {
    import.meta.env.DEV && console.log('INIT FIGHT');

    const fightLogInstance = serverController.fightLogController.add({
      teamOne: teamOneIds,
      teamTwo: teamTwoIds,
      members: teamIdsToFighLogMembers(serverController, [
        ...teamOneIds,
        ...teamTwoIds,
      ]),
      turns: [],
    });

    const teamsMembers = teamIdsToTeamsMembers([...teamOneIds, ...teamTwoIds]);

    const fightInstance: FightInstance = {
      teamOne: teamOneIds,
      teamTwo: teamTwoIds,
      targets: teamsToTargets(teamOneIds, teamTwoIds, teamsMembers),
      members: teamsMembers,
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
