import { BaseController } from '../Base';
import { usePushAction } from './actions/pushAction';
import type { Log } from './types';

export class LogsController extends BaseController<Log> {
  pushAction: ReturnType<typeof usePushAction>;

  constructor(tableName: string) {
    super(tableName);

    this.pushAction = usePushAction(this);
  }
}
