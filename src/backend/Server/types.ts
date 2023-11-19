import type { BaseItem } from '../Controllers/Base';
import type { FightLog } from '../Controllers/FightLogs/types';
import type { FightInstance } from '../Controllers/Fights/types';
import type { Item } from '../Controllers/Items/types';
import type {
  Living,
  LivingEquipmentType,
  NearbyLivings,
} from '../Controllers/Livings/types';
import type { MapCellType } from '../Controllers/Maps/MapCellTypes/types';
import type { MapInfo } from '../Controllers/Maps/types';

export type GlobalInfo = {
  living: BaseItem<Living>;
  map?: BaseItem<MapInfo>;
  fight?: FightInfo;
  neighbour: BaseItem<Living>[];
  distantLivings: NearbyLivings;
  equipment?: LivingEquipmentItems;
  cellType: BaseItem<MapCellType>;
};

export type FightInfo = {
  instance: BaseItem<FightInstance>;
  teams: {
    ally: BaseItem<Living>[];
    enemy: BaseItem<Living>[];
  };
  log: BaseItem<FightLog>;
};

export type LivingEquipmentItems = Partial<
  Record<LivingEquipmentType, BaseItem<Item>>
>;

/**
 * How should a fight instance look
 * Fight log should have exactly the same type
 * <FightInstance /> should work with ongoing fight and fight log
 *
 * type FightMember = BaseItem<Living> & {
 *   isAlive: boolean;
 *   buffs?: BuffDebuff;
 * }
 *
 * type Fight = {
 *   Should include dead Livings
 *   teamOne: Record<number, BaseItem<Living>>;
 *   teamTwo: Record<number, BaseItem<Living>>;
 *   targets?: Record<number, number>;
 *
 *   That's log of actions
 *   turns: FightLogTurn[];
 *
 *   As timestamp, if undefined then that's ended fight
 *   nextTurn?: number;
 * }
 */

export type PositionLikeObject<T> = Record<number, Record<string, T>>;

export type Updater<T> = ((oldState: T) => T) | T;
