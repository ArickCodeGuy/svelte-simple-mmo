import type { FightTurnAction } from '@/backend/Controllers/FightLogs/types';
import type { ServerController } from '../..';
import {
  calculatePlayerAttack,
  rantomizeAttack,
} from '../../utils/calculatePlayerAttack';
import { livingToFightLogMember } from '@/backend/Controllers/FightLogs/utils/livingToFightLogMember';

/**
 * attackType - is spell id. if attackType === 0 then it's a normal attack
 */
export const useFightAttack =
  (serverController: ServerController) =>
  (
    attackerId: number,
    receiverId: number,
    attackType: number
  ): FightTurnAction => {
    const attacker = serverController.livingsController.getById(attackerId);
    const receiver = serverController.livingsController.getById(receiverId);

    let damage: number = 0;
    if (attackType === 0) {
      const attackerEquipment =
        serverController.publicApi.getEquipment(attackerId);
      const attackerAttack = calculatePlayerAttack(attacker, {
        equipment: attackerEquipment,
      });

      damage = rantomizeAttack(attackerAttack);
    }

    serverController.livingsController.updateCurrentHealth(
      receiver.id,
      (v) => v - damage
    );

    return {
      attacker: livingToFightLogMember(attacker),
      receiver: livingToFightLogMember(receiver),
      damage,
      attackType,
    };
  };
