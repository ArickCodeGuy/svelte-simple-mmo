import { useCreateNpc } from './actions/createNpc';
import { useCreateNewPlayer } from './actions/createNewPlayer';
import { useDirectionalMove } from './actions/directionalMove';
import { BaseController, type BaseItem } from '../Base';
import type {
  Living,
  LivingsPositions,
  NearbyLivings,
  Position,
} from './types';
import { useUpdateExp } from './actions/updateExp';
import { useUpdateCurrentHealth } from './actions/updateCurrentHealth';
import { useUpdateStats } from './actions/updateStats';
import { livingCurrentHealth } from './utils/livingCurrentHealth';
import { LivingsProtosController } from './LivingsProtos';

export class LivingsController extends BaseController<Living> {
  #livingsPositions: LivingsPositions;
  livingsProtosController: LivingsProtosController;

  createNpc: ReturnType<typeof useCreateNpc>;
  createNewPlayer: ReturnType<typeof useCreateNewPlayer>;
  directionalMove: ReturnType<typeof useDirectionalMove>;
  updateExp: ReturnType<typeof useUpdateExp>;
  updateCurrentHealth: ReturnType<typeof useUpdateCurrentHealth>;
  updateStats: ReturnType<typeof useUpdateStats>;

  constructor(tableName: string) {
    super(tableName);

    this.livingsProtosController = new LivingsProtosController(
      `${tableName}_PROTOS`
    );

    this.createNpc = useCreateNpc(this);
    this.createNewPlayer = useCreateNewPlayer(this);
    this.directionalMove = useDirectionalMove(this);
    this.updateExp = useUpdateExp(this);
    this.updateCurrentHealth = useUpdateCurrentHealth(this);
    this.updateStats = useUpdateStats(this);

    this.#livingsPositions = {};
  }

  getById(id: number) {
    const living = super.getById(id);

    return {
      ...living,
      pfp:
        living.pfp || this.livingsProtosController.getById(living.protoId).pfp,
    };
  }

  add(living: Living) {
    const newLiving = super.add(living);

    this.updateLivingsPositions(undefined, living.position, newLiving.id);

    return newLiving;
  }

  remove(id: number) {
    const item = this.getById(id);

    this.updateLivingsPositions(item.position, undefined, id);

    return super.remove(id);
  }
  replace(id: number, living: BaseItem<Living>) {
    const item = this.getById(id);

    this.updateLivingsPositions(item.position, undefined, item.id);
    this.updateLivingsPositions(undefined, living.position, living.id);

    return super.replace(id, living);
  }

  update(
    id: number,
    updater:
      | ((_oldState: BaseItem<Living>) => BaseItem<Living>)
      | BaseItem<Living>
  ): BaseItem<Living> {
    const item = this.getById(id);
    const newState = typeof updater === 'function' ? updater(item) : updater;

    if (!item.activity) {
      newState.health.current = livingCurrentHealth(newState);
      newState.lastUpdated = new Date().getTime();
    }

    return super.update(id, newState);
  }

  getLivingsPositions(p: Position): NearbyLivings {
    const res: NearbyLivings = {};
    const map = this.#livingsPositions[p.mapId];
    if (!map) return res;

    for (const pos in map) {
      const ids = map[pos];
      if (!ids || !ids.length) continue;

      res[pos] = true;
    }

    return res;
  }

  getLivingsByPosition({ mapId, y, x }: Position): BaseItem<Living>[] {
    const ids = this.#livingsPositions?.[mapId]?.[`${x},${y}`] || [];

    return ids.map((i) => this.getById(i));
  }

  updateLivingsPositions(
    /**
     * Previous position
     */
    pp: Position | undefined,
    /**
     * New position
     */
    np: Position | undefined,
    id: number
  ) {
    /**
     * this.#livingsPositions
     */
    const lp = this.#livingsPositions;

    const ppPos = pp && `${pp.x},${pp.y}`;
    const npPos = np && `${np.x},${np.y}`;

    /**
     * if position have not changed then return from function
     */
    if (pp && np && pp.mapId === np.mapId && ppPos === npPos) {
      return;
    }

    if (pp && ppPos && lp[pp.mapId]?.[ppPos]) {
      lp[pp.mapId][ppPos] = lp[pp.mapId][ppPos].filter((i) => i !== id);
    }

    if (np && npPos) {
      if (!lp[np.mapId]) {
        lp[np.mapId] = {};
      }
      if (!lp[np.mapId]?.[npPos]) {
        lp[np.mapId][npPos] = [];
      }
      lp[np.mapId][npPos]!.push(id);
    }
  }
}
