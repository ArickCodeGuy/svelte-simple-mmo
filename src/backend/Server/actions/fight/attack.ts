import type { ServerController } from '../..';

/**
 * attackType - is spell id. if attackType === 0 then it's a normal attack
 */
export const useFightAttack =
  (serverController: ServerController) =>
  (attackerId: number, receiverId: number, attackType: number) => {
    const attacker = serverController.livingsController.getById(attackerId);
    const receiver = serverController.livingsController.getById(receiverId);

    let damage: number = 0;
    if (attackType === 0) {
      damage = attacker.computedStats.attack;
    }

    const newReceiverState =
      serverController.livingsController.updateCurrentHealth(
        receiver.id,
        (v) => v - damage
      );
  };
