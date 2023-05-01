import type { FightTurnAction } from '../types';

export const fightAttackToFightTurnLog = (action: FightTurnAction) => {
  return `${action.attacker.name} attacked ${action.receiver.name} for <b>-${action.damage}</b> <b>[${action.receiver.currentHealth}/${action.receiver.health}]</b>`;
};
