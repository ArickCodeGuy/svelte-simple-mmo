import { Server } from '@/backend';
import type { MapInfo } from '@/backend/MapController/types';
import { writable } from 'svelte/store';
import { playerState } from './player';

export const mapState = writable<MapInfo>();

playerState.subscribe((v) => {
  mapState.update(() => Server.mapController.getMapById(v.position.mapId));
});
