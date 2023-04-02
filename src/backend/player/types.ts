import type { Position } from '../../types';
import type { BaseProto } from '../aliveEntity/types';

export type Player = {
  position: Position;
} & BaseProto;
