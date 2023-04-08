import type { FightInstance } from './types';
import { useInitFight } from './actions/initFight';
import { BaseController } from '../Base';

export class FightController extends BaseController<FightInstance> {
  initFight: ReturnType<typeof useInitFight>;

  constructor(tableName: string) {
    super(tableName);

    // actions
    this.initFight = useInitFight(this);
  }
}
