import type { Living } from '../Livings/types';

export type FightInstance = {
  id: number;
  teamOne: Living[];
  teamTwo: Living[];
};
