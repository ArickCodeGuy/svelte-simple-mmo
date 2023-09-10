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
      // caused when teamTurn('teamTwo') is dead
      // or fightTurn when fight is over
    }
  };

const teamTurn = (serverController: ServerController, fightId: number) => {
  const fight = serverController.fightController.getById(fightId);

  // @@TODO: randomize member turns
  const members = Object.values(fight.members);

  for (const member of members) {
    const attacker = serverController.livingsController.getById(member.id);
    // Don't do auto attack if it's a player
    if (attacker.protoId === 1) continue;

    const attackerId = member.id;
    const receiverId = fight.targets[attackerId];
    const attackType = 0;

    serverController.fightActions.attack(attackerId, attackType);

    const receiverAfterAttack =
      serverController.livingsController.getById(receiverId);

    if (receiverAfterAttack.health.current > 0) continue;

    serverController.fightController.markAsDead(fight.id, receiverId);
    if (serverController.fightController.isOneTeamDead(fight.id)) {
      serverController.fightActions.end(fight.id);
      return;
    }
  }
};
