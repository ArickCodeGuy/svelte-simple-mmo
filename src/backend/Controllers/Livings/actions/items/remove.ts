import type { ItemType } from '@/backend/Controllers/Items/types';
import type { LivingsController } from '../..';

export const useRemoveItem =
  (controller: LivingsController) =>
  (playerId: number, itemId: number, type: ItemType) => {
    if (type === 'other') return;

    controller.update(playerId, (v) => {
      const equipment = v.equipment ? { ...v.equipment } : {};
      delete equipment[type];

      return {
        ...v,
        equipment,
      };
    });
  };
