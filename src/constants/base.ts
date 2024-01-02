export const BASE_PATH = '/svelte-simple-mmo';

export enum ROUTE_NAMES_ENUM {
  MAIN = '',
  CHARACTER = '/character',
  FIGHT_LOGS = '/fight-logs',
  FIGHT = '/fight/:id',
  MAP_EDIT = '/map-edit',
}

export type ROUTE_NAMES = keyof typeof ROUTE_NAMES_ENUM;
