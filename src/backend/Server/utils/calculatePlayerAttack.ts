import type { Living } from '@/backend/Controllers/Livings/types';
import type { Equipment } from '../types';
import { calculatePlayerCompleteStats } from './calculatePlayerCompleteStats';

export type PlayerAttack = {
  damage: number;
  critRate: number;
  range: number;
};

/**
 * calculates raw player attack before applying other player characteristics
 */
export const calculatePlayerAttack = (
  player: Living,
  options: {
    equipment?: Equipment;
  } = {}
): PlayerAttack => {
  const stats = calculatePlayerCompleteStats(player, options.equipment);

  const damage = stats.attack + stats.dexterity + stats.strength * 3;
  const critRate = 0;
  const range = 1;

  return {
    damage,
    critRate,
    range,
  };
};
