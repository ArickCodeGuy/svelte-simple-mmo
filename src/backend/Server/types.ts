import type { BaseItem } from '../Controllers/Base';
import type { FightLog, FightLogTurns } from '../Controllers/FightLogs/types';
import type { FightInstance } from '../Controllers/Fights/types';
import type { Living, MapLivingsPositions } from '../Controllers/Livings/types';
import type { MapInfo } from '../Controllers/Maps/types';

export type GlobalInfo = {
  living: BaseItem<Living>;
  map?: BaseItem<MapInfo>;
  fight?: FightInfo;
  neighbors: BaseItem<Living>[];
  distantLivings: MapLivingsPositions;
};

export type FightInfo = {
  instance: BaseItem<FightInstance>;
  teams: {
    ally: BaseItem<Living>[];
    enemy: BaseItem<Living>[];
  };
  log: BaseItem<FightLog>;
};
