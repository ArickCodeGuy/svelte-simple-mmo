import { fetchMap } from '@/backend/MapTable';
import { writable } from 'svelte/store';

export const mapState = writable(fetchMap(0));
