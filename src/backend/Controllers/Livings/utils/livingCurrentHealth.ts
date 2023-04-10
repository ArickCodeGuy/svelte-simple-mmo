import { Living } from '../types';

export const livingCurrentHealth = (living: Living) => {
  /**
   * @description Don't update npc health
   */
  if (living.currentHp === living.computedStats.maxHp || living.protoId !== 0)
    return living.currentHp;

  /**
   * @description health/s. 1% of max health per second
   */
  const healthGrowth = living.computedStats.maxHp / 100;

  if (living.activity === 'FIGHT') {
    return living.currentHp;
  }
  const secondsPassed = (new Date().getTime() - living.lastUpdated) / 1000;
  const hp = Math.floor(living.currentHp + healthGrowth * secondsPassed);
  const maxHp = living.computedStats.maxHp;

  return hp > maxHp ? maxHp : hp;
};
