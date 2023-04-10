import { livingCurrentHealth } from '@/backend/Controllers/Livings/utils/livingCurrentHealth';
import type { ServerController } from '..';

export const useInitFight =
  (serverController: ServerController) =>
  (teamOne: number[], teamTwo: number[]) => {
    console.log('INIT FIGHT');

    const fightInstance = serverController.fightController.initFight(
      teamOne,
      teamTwo
    );
    [...teamOne, ...teamTwo].forEach((memberId) => {
      serverController.livingsController.update(memberId, (member) => ({
        ...member,
        currentHp: livingCurrentHealth(member),
        lastUpdated: new Date().getTime(),
        activity: 'FIGHT',
        fightInstanceId: fightInstance.id,
      }));
    });

    setTimeout(() => {
      serverController.fightTurn(fightInstance.id);
    }, fightInstance.nextTurn - new Date().getTime());
    return fightInstance;
  };