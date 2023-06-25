import { useCreateFromId } from './actions/createFromId';
import { useCreateNewPlayer } from './actions/createNewPlayer';
import { useDirectionalMove } from './actions/directionalMove';
import { useGetLivingsByPosition } from './actions/getLivingsByPosition';
import { useGetLivingsPositions } from './actions/getLivingsPositions';
import { BaseController, type BaseItem } from '../Base';
import type { Living } from './types';
import { useUpdateExp } from './actions/updateExp';
import { useUpdateCurrentHealth } from './actions/updateCurrentHealth';
import { useUpdateStats } from './actions/updateStats';
import { livingCurrentHealth } from './utils/livingCurrentHealth';

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

  update(
    id: number,
    updater:
      | ((oldState: BaseItem<Living>) => BaseItem<Living>)
      | BaseItem<Living>
  ): BaseItem<Living> {
    const item = this.getById(id);
    const newState = typeof updater === 'function' ? updater(item) : updater;

    newState.health.current = livingCurrentHealth(newState);
    newState.lastUpdated = new Date().getTime();

    return super.update(id, newState);
  }
}
