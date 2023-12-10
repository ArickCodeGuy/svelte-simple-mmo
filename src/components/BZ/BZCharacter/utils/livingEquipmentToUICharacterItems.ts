import type { LivingEquipment } from '@/backend/Controllers/Livings/types';
import type { UICharacterItems } from '@/components/UI/UICharacter/types';

export const livingEquipmentToUICharacterItems = (
  equipment: LivingEquipment | undefined
): UICharacterItems => {
  const items: UICharacterItems = {};
  if (!equipment) return items;

  (Object.entries(equipment) as [keyof LivingEquipment, number][]).forEach(
    ([place, id]) => {
      items[place] = String(id);
    }
  );

  return items;
};
