import type { BaseItem } from '../Controllers/Base';
import type { FightLog } from '../Controllers/FightLogs/types';
import type { FightInstance } from '../Controllers/Fights/types';
import type { Item } from '../Controllers/Items/types';
import type {
  Living,
  LivingEquipmentType,
  MapLivingsPositions,
  NearbyLivings,
} from '../Controllers/Livings/types';
import type { MapInfo } from '../Controllers/Maps/types';

export type GlobalInfo = {
  living: BaseItem<Living>;
  map?: BaseItem<MapInfo>;
  fight?: FightInfo;
  neighbors: BaseItem<Living>[];
  distantLivings: NearbyLivings;
  equipment?: Equipment;
};

export type FightInfo = {
  instance: BaseItem<FightInstance>;
  teams: {
    ally: BaseItem<Living>[];
    enemy: BaseItem<Living>[];
  };
  log: BaseItem<FightLog>;
};

export type Equipment = Partial<Record<LivingEquipmentType, BaseItem<Item>>>;
