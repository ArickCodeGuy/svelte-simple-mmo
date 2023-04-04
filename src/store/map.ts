import { Server } from '@/backend';
import type { MapInfo } from '@/backend/MapTable/types';
import { writable } from 'svelte/store';
import { playerState } from './player';

export const mapState = writable<MapInfo>();

playerState.subscribe((v) => {
  mapState.update(() => Server.mapTable.getMapById(v.position.mapId));
});
