import { useCreateFromId } from './actions/createFromId';
import { useCreateNewPlayer } from './actions/createNewPlayer';
import { useDirectionalMove } from './actions/directionalMove';
import { useGetLivingsByPosition } from './actions/getLivingsByPosition';
import { useGetLivingsPositions } from './actions/getLivingsPositions';
import { BaseController } from '../Base';
import type { Living } from './types';
import { useUpdateExp } from './actions/updateExp';
import { useUpdateCurrentHealth } from './actions/updateComputedStats';
import { useUpdateStats } from './actions/updateStats';

export class LivingsController extends BaseController<Living> {
  createFromId: ReturnType<typeof useCreateFromId>;
  createNewPlayer: ReturnType<typeof useCreateNewPlayer>;
  directionalMove: ReturnType<typeof useDirectionalMove>;
  getLivingsByPosition: ReturnType<typeof useGetLivingsByPosition>;
  getLivingsPositions: ReturnType<typeof useGetLivingsPositions>;
  updateExp: ReturnType<typeof useUpdateExp>;
  updateCurrentHealth: ReturnType<typeof useUpdateCurrentHealth>;
  updateStats: ReturnType<typeof useUpdateStats>;

  constructor(tableName: string) {
    super(tableName);

    this.createFromId = useCreateFromId(this);
    this.createNewPlayer = useCreateNewPlayer(this);
    this.directionalMove = useDirectionalMove(this);
    this.getLivingsByPosition = useGetLivingsByPosition(this);
    this.getLivingsPositions = useGetLivingsPositions(this);
    this.updateExp = useUpdateExp(this);
    this.updateCurrentHealth = useUpdateCurrentHealth(this);
    this.updateStats = useUpdateStats(this);
  }
}
