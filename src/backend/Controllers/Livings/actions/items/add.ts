import type { ItemType } from '@/backend/Controllers/Items/types';
import type { LivingsController } from '../..';

// Server defines whether you can equip item. Controller just adds item to equipped
export const useAddItem =
  (controller: LivingsController) =>
  (playerId: number, itemId: number, type: ItemType) => {
    if (type === 'other') return;

    controller.update(playerId, (v) => {
      const equipment = v.equipment ? { ...v.equipment } : {};

      equipment[type] = itemId;

      return {
        ...v,
        equipment,
      };
    });
  };
