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
  (controller: ServerController) =>
  (attackerId: number, attackType: number) => {
    const attacker = controller.livingsController.getById(attackerId);

    if (!attacker.fightInstanceId) {
      throw new Error(
        `Attacker: ${attacker.id} tryes to attack without fight instance id`
      );
    }

    const fightInstance = controller.fightController.getById(
      attacker.fightInstanceId
    );

    if (fightInstance.members[attacker.id].hasAttacked) {
      throw new Error(
        `Attacker: ${attacker.id} tryes to attack more than allowed`
      );
    }

    const receiverId = fightInstance.targets[attacker.id];
    const receiver = controller.livingsController.getById(receiverId);

    let damage: number = 0;
    if (attackType === 0) {
      const attackerEquipment =
        controller.publicApi.items.equipment(attackerId);
      const attackerAttack = calculatePlayerAttack(attacker, {
        equipment: attackerEquipment,
      });

      damage = rantomizeAttack(attackerAttack);
    }

    controller.livingsController.updateCurrentHealth(
      receiver.id,
      (v) => v - damage
    );

    controller.fightController.update(fightInstance.id, (v) => {
      const members = { ...v.members };
      members[attackerId] = {
        ...members[attackerId],
        hasAttacked: true,
      };

      const newState = {
        ...v,
        members,
      };

      return newState;
    });

    // write log
    const log: FightTurnAction = {
      attacker: livingToFightLogMember(attacker),
      receiver: livingToFightLogMember(receiver),
      damage,
      attackType,
    };
    controller.fightLogActions.pushTurnAction(fightInstance.logId, log);

    const receiverAfterAttack =
      controller.livingsController.getById(receiverId);
    if (receiverAfterAttack.health.current <= 0) {
      controller.fightController.markAsDead(fightInstance.id, receiverId);

      if (controller.fightController.isOneTeamDead(fightInstance.id)) {
        controller.fightActions.end(fightInstance.id);
      }
    }
  };
