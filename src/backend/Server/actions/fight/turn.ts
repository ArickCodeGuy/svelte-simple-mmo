import type { ServerController } from '../..';

export const useFightTurn =
  (serverController: ServerController) => (fightInstanceId: number) => {
    import.meta.env.DEV && console.log('FIGHT TURN');

    try {
      const fight = serverController.fightController.getById(fightInstanceId);
      serverController.fightLogActions.pushTurn(fight.logId);

      teamTurn(serverController, fight.id);

      const newFightState = serverController.fightController.updateTimeout(
        fight.id
      );

      window.setTimeout(() => {
        serverController.fightActions.turn(fight.id);
      }, newFightState.nextTurn - new Date().getTime());
    } catch (e) {
      console.error('Fight turn: Fight is already over. Aborting...');
    }
  };

const teamTurn = (serverController: ServerController, fightId: number) => {
  const fightInstance = serverController.fightController.getById(fightId);

  // @@TODO: randomize member turns
  const members = Object.values(fightInstance.members);

  for (const member of members) {
    const attacker = serverController.livingsController.getById(member.id);
    // Don't do auto attack if it's a player
    if (attacker.protoId === 1) continue;

    const attackerId = member.id;
    const attackType = 0;

    serverController.fightActions.attack(attackerId, attackType);

    if (serverController.fightController.isOneTeamDead(fightInstance.id))
      return;
  }
};
