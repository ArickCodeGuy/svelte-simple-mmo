import { writable } from 'svelte/store';
import { createPlayer } from '../backend/player';
import type { Player } from '../backend/player/types';

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

export const playerActions = {
  directionalMove,
};
