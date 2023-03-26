import type { Position } from '../../types';
import type { Stats } from '../../types/stats';

export type Player = {
  // id: number;
  name: string;
  stats: Stats;
  position: Position;
};
