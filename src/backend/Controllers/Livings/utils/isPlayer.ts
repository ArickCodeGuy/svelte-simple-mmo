import type { Living } from '../types';

export const isPlayer = (living: Living) => living.protoId === 1;
