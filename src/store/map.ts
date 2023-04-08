import { Server } from '@/backend';
import { writable } from 'svelte/store';
import { playerState } from './player';

export const mapState = writable(Server.mapController.getById(1));

playerState.subscribe((v) => {
  mapState.update(() => Server.mapController.getById(v.position.mapId)!);
});
