import { livingCurrentHealth } from '@/backend/Controllers/Livings/utils/livingCurrentHealth';
import type { ServerController } from '..';
import { livingToFightLogMember } from '@/backend/Controllers/FightLogs/utils/livingToFightLogMember';

export const useInitFight =
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

    const fightInstance = serverController.fightController.initFight(
      teamOneIds,
      teamTwoIds,
      fightLogInstance.id
    );
    [...teamOneIds, ...teamTwoIds].forEach((memberId) => {
      serverController.livingsController.update(memberId, (member) => ({
        ...member,
        computedStats: {
          ...member.computedStats,
          currentHealth: livingCurrentHealth(member),
          lastUpdated: new Date().getTime(),
        },
        activity: 'FIGHT',
        fightInstanceId: fightInstance.id,
      }));
    });

    setTimeout(() => {
      serverController.fightTurn(fightInstance.id);
    }, fightInstance.nextTurn - new Date().getTime());
    return fightInstance;
  };
