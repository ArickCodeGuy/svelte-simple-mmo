import idGen from '@/utils/idGen';
import type { FightInstance } from './types';
import { useInitFight } from './actions/initFight';
import { useFindFightById } from './actions/findFightById';
import { useRemove } from './actions/remove';
import { useFindFightIndexById } from './actions/findFightIndexById';
import { useUpdate } from './actions/update';

export class FightController {
  fights: FightInstance[];
  idGen: () => number;
  initFight: ReturnType<typeof useInitFight>;
  findFightById: ReturnType<typeof useFindFightById>;
  findFightIndexById: ReturnType<typeof useFindFightIndexById>;
  remove: ReturnType<typeof useRemove>;
  update: ReturnType<typeof useUpdate>;

  constructor() {
    this.fights = [];
    this.idGen = idGen();

    // actions
    this.initFight = useInitFight(this);
    this.findFightById = useFindFightById(this);
    this.findFightIndexById = useFindFightIndexById(this);
    this.remove = useRemove(this);
    this.update = useUpdate(this);
  }
}
