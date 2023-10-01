import type {
  Living,
  LivingCompleteStats,
} from '@/backend/Controllers/Livings/types';
import type { Equipment } from '../types';
import { useLivingCompleteStats } from '@/backend/Controllers/Livings/utils/useLivingCompleteStats';
import { calculateEquipmentStats } from './calculateEquipmentStats';

/**
 * Player stats after applying equipment bonuses
 */
export const calculatePlayerCompleteStats = (
  player: Living,
  equipment?: Equipment
): LivingCompleteStats => {
  const stats = useLivingCompleteStats();
  const equipmentStats = calculateEquipmentStats(equipment);

  (Object.entries(stats) as [keyof LivingCompleteStats, number][]).forEach(
    ([key]) => {
      stats[key] = player.stats[key] + equipmentStats[key];
    }
  );

  return stats;
};
