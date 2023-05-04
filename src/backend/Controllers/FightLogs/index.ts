import { BaseController } from '../Base';
import type { FightLog } from './types';

export class FightLogController extends BaseController<FightLog> {
  constructor(tableName: string) {
    super(tableName);
  }
}
