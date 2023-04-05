import type { Living } from '@/backend/Controllers/Livings/types';
import type { UILivingButtonProps } from '@/components/UI/Livings/types';

export const livingToUILivingButtonProps = (
  living: Living
): UILivingButtonProps => ({
  lvl: living.lvl,
  name: living.name,
  chp: living.chp,
  hp: living.stats.hp,
});
