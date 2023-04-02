import type { Living } from '../Livings/types';

/**
 * Object[mapId][y][x] = Living[];
 */
export type LivingsPositions = Record<string, MapLivingsPositions>;

export type MapLivingsPositions = Record<string, Record<string, Living[]>>;
