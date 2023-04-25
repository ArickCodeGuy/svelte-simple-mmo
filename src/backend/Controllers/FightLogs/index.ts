import { BaseController } from '../Base';
import { usePushAction } from './actions/pushAction';
import type { FightLog } from './types';

export class FightLogController extends BaseController<FightLog> {
  pushAction: ReturnType<typeof usePushAction>;

  constructor(tableName: string) {
    super(tableName);

    this.pushAction = usePushAction(this);
  }
}
