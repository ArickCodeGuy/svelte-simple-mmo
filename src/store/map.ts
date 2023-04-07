import { Server } from '@/backend';
import { writable } from 'svelte/store';
import { playerState } from './player';
import type { MapInfo } from '@/backend/Controllers/Maps/types';

export const mapState = writable<MapInfo>();

playerState.subscribe((v) => {
  mapState.update(() => Server.mapController.getById(v.position.mapId));
});
