import type { BaseItem } from '../Controllers/Base';
import type { FightInstance } from '../Controllers/Fights/types';
import type { Living } from '../Controllers/Livings/types';
import type { MapInfo } from '../Controllers/Maps/types';

export type GlobalInfo = {
  living: BaseItem<Living>;
  map?: BaseItem<MapInfo>;
  fight?: FightInfo;
  neighbors: BaseItem<Living>[];
};

export type FightInfo = {
  instance: BaseItem<FightInstance>;
  teams: {
    ally: BaseItem<Living>[];
    enemy: BaseItem<Living>[];
  };
};
