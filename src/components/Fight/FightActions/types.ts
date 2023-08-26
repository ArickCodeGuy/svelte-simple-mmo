import type { BaseItem } from '@/backend/Controllers/Base';
import type { Living } from '@/backend/Controllers/Livings/types';
import type { FightInfo } from '@/backend/Server/types';

export type FightActionsProps = {
  living?: BaseItem<Living>;
  fight?: FightInfo;
  action?: (skillType: number) => void;
};
