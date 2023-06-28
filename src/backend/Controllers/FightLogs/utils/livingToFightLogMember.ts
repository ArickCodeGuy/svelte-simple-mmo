import type { BaseItem } from '../../Base';
import type { Living } from '../../Livings/types';
import type { FightLogMember } from '../types';

export const livingToFightLogMember = (
  living: BaseItem<Living>
): FightLogMember => ({
  id: living.id,
  name: living.name,
  lvl: living.lvl,
  currentHealth: living.health.current,
  health: living.health.max,
});
