import { writable } from 'svelte/store';
import type { LivingActivity } from '@/backend/Livings/types';
import { livingsActions } from '@/backend/Livings';
import { fightActions } from '@/backend/fight/actions';

export const playerState = writable(livingsActions.createPlayer('admin'));

export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

const directionalMove = (direction: Direction) => {
  playerState.update((player) => {
    const newPlayerState = { ...player };

    if (direction === 'UP')
      newPlayerState.position = { ...player.position, y: --player.position.y };
    if (direction === 'DOWN')
      newPlayerState.position = { ...player.position, y: ++player.position.y };
    if (direction === 'LEFT')
      newPlayerState.position = { ...player.position, x: --player.position.x };
    if (direction === 'RIGHT')
      newPlayerState.position = { ...player.position, x: ++player.position.x };

    return newPlayerState;
  });
};

const initFight = (livingId: number) => {
  playerState.update((player) => {
    const inst = fightActions.initFight([player.id], [livingId]);
    console.log(fightActions.getById(inst.id));

    return {
      ...player,
      activity: 'FIGHT',
    };
  });
};

export const playerActions = {
  directionalMove,
  initFight,
};
