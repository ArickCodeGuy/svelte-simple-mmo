import type { Living } from '../types';

export const livingCurrentHealth = (living: Living) => {
  /**
   * Don't update if already max
   * Don't update npc health
   * Don't update if player in fight
   */
  if (
    living.health.current === living.health.max ||
    living.protoId !== 0 ||
    living.activity === 'FIGHT'
  )
    return living.health.current;

  /**
   * health/s. 1% of max health per second
   */
  const healthGrowth = living.health.max / 100;

  const secondsPassed = (new Date().getTime() - living.lastUpdated) / 1000;
  const hp = Math.floor(living.health.current + healthGrowth * secondsPassed);
  const maxHp = living.health.max;

  return hp > maxHp ? maxHp : hp;
};
