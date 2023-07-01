import { Server } from '@/backend';
import type { Dictionary } from '@/types/types';
import { writable } from 'svelte/store';

export const frontDictionaryState = writable<Dictionary>({});

// @@TODO: save to local storage
frontDictionaryState.update(() => Server.publicApi.dictionary());
