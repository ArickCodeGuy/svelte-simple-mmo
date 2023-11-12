import type { Living } from '@/backend/Controllers/Livings/types';
import type { LivingEquipmentItems } from '../types';
import { calculatePlayerCompleteStats } from './calculatePlayerCompleteStats';

export type PlayerAttack = {
  damage: number;
  /**
   * Crit rate float from 0 to 1
   */
  critRate: number;
  /**
   * Chance to miss float from 0 to 1
   */
  missRate: number;
  /**
   * Attack range float from 0 to 1
   */
  range: number;
};

/**
 * Calculates raw player attack before applying other player characteristics
 */
export const calculatePlayerAttack = (
  player: Living,
  options: {
    equipment?: LivingEquipmentItems;
  } = {}
): PlayerAttack => {
  const stats = calculatePlayerCompleteStats(player, options.equipment);

  const damage = stats.attack + stats.dexterity + stats.strength * 3;
  const critRate = 0.05;
  const missRate = 0.05;
  const range = 0.6;

  return {
    damage,
    critRate,
    missRate,
    range,
  };
};

/**
 * Returns random damage from attack
 */
export const rantomizeAttack = (playerAttack: PlayerAttack): number => {
  let dmg = playerAttack.damage;

  if (Math.random() < playerAttack.missRate) {
    return 0;
  }

  if (Math.random() < playerAttack.critRate) {
    dmg *= 2;
  }

  if (playerAttack.range === 1) return dmg;

  const min = Math.floor(dmg * playerAttack.range);
  const range = dmg - min;

  const damage = min + Math.floor(Math.random() * range);
  return damage;
};
