import { useLivingCompleteStats } from '@/backend/Controllers/Livings/utils/useLivingCompleteStats';
import type { Equipment } from '../types';
import type {
  LivingCompleteStats,
  LivingEquipment,
} from '@/backend/Controllers/Livings/types';
import type { Item } from '@/backend/Controllers/Items/types';

export const calculateEquipmentStats = (
  equipment: Equipment | undefined
): LivingCompleteStats => {
  const stats = useLivingCompleteStats();
  if (!equipment) {
    return stats;
  }

  (
    Object.entries(equipment) as [keyof LivingEquipment, Item | undefined][]
  ).forEach(([place, item]) => {
    if (!item) return;

    if (item.statsBonuses) {
      (
        Object.entries(item.statsBonuses) as [
          keyof LivingCompleteStats,
          number
        ][]
      ).forEach(([key, value]) => {
        stats[key] += value;
      });
    }
  });

  return stats;
};
