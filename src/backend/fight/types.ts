import type { BaseProto } from '../aliveEntity/types';

export type FightInstance = {
  id: number;
  teamOne: BaseProto[];
  teamTwo: BaseProto[];
};
