import type { BaseItem } from '@/backend/Controllers/Base';
import type { Living } from '@/backend/Controllers/Livings/types';
import type { UIActionButtonProps } from '@/components/UI/ActionButton/types';

export const livingToUIActionButtonProps = (
  living: BaseItem<Living>
): UIActionButtonProps => ({
  lvl: living.lvl,
  name: living.name,
  chp: living.chp,
  hp: living.stats.hp,
});
