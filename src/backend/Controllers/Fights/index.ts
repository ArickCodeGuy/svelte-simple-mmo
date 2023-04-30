import type { FightInstance } from './types';
import { BaseController } from '../Base';
import { useMarkAsDead } from './actions/markAsDead';
import { useGetComputedInstanceById } from './actions/getComputedInstanceById';
import { useUpdateTargets } from './actions/updateTargets';
import { useIsOneTeamDead } from './actions/isOneTeamDead';
import { useUpdateTimeout } from './actions/updateTimeout';

export class FightController extends BaseController<FightInstance> {
  markAsDead: ReturnType<typeof useMarkAsDead>;
  getComputedInstanceById: ReturnType<typeof useGetComputedInstanceById>;
  updateTargets: ReturnType<typeof useUpdateTargets>;
  isOneTeamDead: ReturnType<typeof useIsOneTeamDead>;
  updateTimeout: ReturnType<typeof useUpdateTimeout>;

  constructor(tableName: string) {
    super(tableName);

    // actions
    this.getComputedInstanceById = useGetComputedInstanceById(this);
    this.updateTargets = useUpdateTargets(this);
    this.isOneTeamDead = useIsOneTeamDead(this);
    this.updateTimeout = useUpdateTimeout(this);
    this.markAsDead = useMarkAsDead(this);
  }
}
