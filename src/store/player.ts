import { writable } from 'svelte/store';
import { createPlayer } from '../backend/player';
import type { BaseProtoActivity } from '@/backend/aliveEntity/types';

export const playerState = writable(createPlayer('admin'));

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

const setActivity = (activity: BaseProtoActivity) => {
  playerState.update((state) => ({
    ...state,
    activity,
  }));
};

export const playerActions = {
  directionalMove,
  setActivity,
};
