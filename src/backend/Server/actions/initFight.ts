import type { ServerController } from '..';

export const useInitFight =
  (serverController: ServerController) =>
  (teamOne: number[], teamTwo: number[]) => {
    const fightInstance = serverController.fightController.initFight(
      teamOne,
      teamTwo
    );
    const members = [...teamOne, ...teamTwo].map((id) =>
      serverController.livingsController.findById(id)
    );
    members.forEach((fightMember) =>
      serverController.livingsController.update(fightMember.id, {
        ...fightMember,
        activity: 'FIGHT',
      })
    );

    console.log(fightInstance);
  };
