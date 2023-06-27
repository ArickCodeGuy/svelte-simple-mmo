import type { ServerController } from '../..';
import { calculatePlayerAttack } from '../../utils/calculatePlayerAttack';

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
      const attackerEquipment =
        serverController.publicApi.getEquipment(attackerId);
      const attackerAttack = calculatePlayerAttack(attacker, {
        equipment: attackerEquipment,
      });

      damage = attackerAttack.damage;
    }

    const newReceiverState =
      serverController.livingsController.updateCurrentHealth(
        receiver.id,
        (v) => v - damage
      );
  };
