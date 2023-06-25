import type { Living } from '@/backend/Controllers/Livings/types';
import { livingStats } from '@/backend/Controllers/Livings/utils/livingStats';
import type { UICharacterProps } from '@/components/UI/Character/types';
import { livingEquipmentToUICharacterItems } from './livingEquipmentToUICharacterItems';

export const livingToUICharacterProps = (living: Living): UICharacterProps => {
  return {
    name: living.name,
    lvl: living.lvl,
    exp: living.exp,
    health: living.health,
    lastUpdated: living.lastUpdated,
    statPoints: living.statPoints,
    stats: livingStats(living),
    isView: true,
    items: livingEquipmentToUICharacterItems(living.equipment),
  };
};
