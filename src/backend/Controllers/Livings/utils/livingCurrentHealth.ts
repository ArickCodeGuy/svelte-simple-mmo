import type { Living } from '../types';

export const livingCurrentHealth = (living: Living) => {
  /**
   * @description Don't update npc health or if max
   */
  if (
    living.computedStats.currentHealth === living.computedStats.health ||
    living.protoId !== 0
  )
    return living.computedStats.currentHealth;

  /**
   * @description health/s. 1% of max health per second
   */
  const healthGrowth = living.computedStats.health / 100;

  if (living.activity === 'FIGHT') {
    return living.computedStats.currentHealth;
  }
  const secondsPassed =
    (new Date().getTime() - living.computedStats.lastUpdated) / 1000;
  const hp = Math.floor(
    living.computedStats.currentHealth + healthGrowth * secondsPassed
  );
  const maxHp = living.computedStats.health;

  return hp > maxHp ? maxHp : hp;
};
