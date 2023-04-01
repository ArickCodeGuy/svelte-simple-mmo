import { fetchMap } from '@/backend/map';
import { writable } from 'svelte/store';

export const mapState = writable(fetchMap(0));
