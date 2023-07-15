import { BaseController } from '../../Base';
import { useInit } from './actions/init';
import type { LivingProto } from './types';

export class LivingsProtosController extends BaseController<LivingProto> {
  init: ReturnType<typeof useInit>;

  constructor(tableName: string) {
    super(tableName);

    this.init = useInit(this);

    this.init();
  }
}
