import type { UICharacterProps } from '../types';

/**
 * @param update whether update current health based on time passed. Used if player in fight or if it is npc
 * @returns current health
 */
export const currentHealth = (props: UICharacterProps): number => {
  if (props.health.current === props.health.max || props.isView)
    return props.health.current;

  const healthGrowth = props.health.max / 100;

  const secondsPassed = (new Date().getTime() - props.lastUpdated) / 1000;
  const hp = Math.floor(props.health.current + healthGrowth * secondsPassed);
  const maxHp = props.health.max;

  return hp > maxHp ? maxHp : hp;
};
