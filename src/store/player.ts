import { writable } from 'svelte/store';
import { Server } from '@/backend';

export const playerState = writable(Server.livingsTable.createPlayer('admin'));
