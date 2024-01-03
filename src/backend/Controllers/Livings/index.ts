import { useDirectionalMove } from './actions/directionalMove';
import { BaseController, type BaseItem } from '../Base';
import type {
  Living,
  MapLivingsPositions,
  NearbyLivings,
  Position,
} from './types';
import { useUpdateExp } from './actions/updateExp';
import { useUpdateCurrentHealth } from './actions/updateCurrentHealth';
import { useUpdateStats } from './actions/updateStats';
import { livingCurrentHealth } from './utils/livingCurrentHealth';
import { LivingsProtosController } from './LivingsProtos';
import {
  getItemFromPositionLikeObject,
  setItemToPositionLikeObject,
} from '@/backend/Server/utils/getItemFromPositionLikeObject';
import type { Updater } from '@/backend/Server/types';
import { updaterFunction } from '@/backend/Server/utils/updaterFunction';
import { useActions } from './actions';

export class LivingsController extends BaseController<Living> {
  #livingsPositions: MapLivingsPositions;
  livingsProtosController: LivingsProtosController;

  actions: ReturnType<typeof useActions>;

  directionalMove: ReturnType<typeof useDirectionalMove>;
  updateExp: ReturnType<typeof useUpdateExp>;
  updateCurrentHealth: ReturnType<typeof useUpdateCurrentHealth>;
  updateStats: ReturnType<typeof useUpdateStats>;

  constructor(tableName: string) {
    super(tableName);

    this.livingsProtosController = new LivingsProtosController(
      `${tableName}_PROTOS`
    );

    this.actions = useActions(this);

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

  update(id: number, updater: Updater<BaseItem<Living>>): BaseItem<Living> {
    const item = this.getById(id);
    const newState = updaterFunction(updater, item);

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

  getLivingsIdsByPosition(pos: Position) {
    return getItemFromPositionLikeObject(pos, this.#livingsPositions);
  }

  getLivingsByPosition({ mapId, y, x }: Position): BaseItem<Living>[] {
    const ids = this.getLivingsIdsByPosition({ mapId, y, x });

    return (ids || []).map((i) => this.getById(i));
  }

  removeLivingFromPosition(pos: Position, id: number) {
    setItemToPositionLikeObject(pos, this.#livingsPositions, (v) => {
      if (!v) return [];

      return v.filter((i) => i !== id);
    });
  }

  addLivingToPosition(pos: Position, id: number) {
    setItemToPositionLikeObject(pos, this.#livingsPositions, (v) => {
      if (!v) return [id];

      return [...v, id];
    });
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
    /**
     * living.id
     */
    id: number
  ) {
    if (pp) {
      this.removeLivingFromPosition(pp, id);
    }

    if (np) {
      this.addLivingToPosition(np, id);
    }
  }
}
