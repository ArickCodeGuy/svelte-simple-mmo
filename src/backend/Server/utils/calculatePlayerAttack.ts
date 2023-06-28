import type { Living } from '@/backend/Controllers/Livings/types';
import type { Equipment } from '../types';
import { calculatePlayerCompleteStats } from './calculatePlayerCompleteStats';

export type PlayerAttack = {
  damage: number;
  /**
   * Crit rate float from 0 to 1
   */
  critRate: number;
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
    equipment?: Equipment;
  } = {}
): PlayerAttack => {
  const stats = calculatePlayerCompleteStats(player, options.equipment);

  const damage = stats.attack + stats.dexterity + stats.strength * 3;
  const critRate = 0.1;
  const range = 0.8;

  return {
    damage,
    critRate,
    range,
  };
};

/**
 * Returns random attack
 */
export const rantomizeAttack = (playerAttack: PlayerAttack): number => {
  let dmg = playerAttack.damage;

  if (playerAttack.critRate !== 0 && Math.random() > playerAttack.critRate) {
    dmg *= 2;
  }

  if (playerAttack.range === 1) return dmg;

  const min = Math.floor(dmg * playerAttack.range);
  const range = dmg - min;

  return min * Math.floor(Math.random() * range);
};
