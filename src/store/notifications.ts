import { writable } from 'svelte/store';
import type { Notifications } from './types';

export const notifications = writable<Notifications>();
