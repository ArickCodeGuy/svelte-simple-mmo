import idGen from '@/utils/idGen';
import type { FightInstance } from './types';
import { useInitFight } from './actions/initFight';
import { useFindFightById } from './actions/findFightById';
import { useEndFight } from './actions/endFight';

export class FightController {
  fights: FightInstance[];
  idGen: () => number;
  initFight: ReturnType<typeof useInitFight>;
  endFight: ReturnType<typeof useEndFight>;
  findFightById: ReturnType<typeof useFindFightById>;

  constructor() {
    this.fights = [];
    this.idGen = idGen();

    // actions
    this.initFight = useInitFight(this);
    this.endFight = useEndFight(this);
    this.findFightById = useFindFightById(this);
  }
}
