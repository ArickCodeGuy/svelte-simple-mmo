import { useCreateFromId } from './actions/createFromId';
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
import { runThroughGridArea } from '../Maps/utils/runThroughGridArea';
import { LivingsProtosController } from './LivingsProtos';

export class LivingsController extends BaseController<Living> {
  #livingsPositions: LivingsPositions;
  livingsProtosController: LivingsProtosController;

  createFromId: ReturnType<typeof useCreateFromId>;
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

    this.createFromId = useCreateFromId(this);
    this.createNewPlayer = useCreateNewPlayer(this);
    this.directionalMove = useDirectionalMove(this);
    this.updateExp = useUpdateExp(this);
    this.updateCurrentHealth = useUpdateCurrentHealth(this);
    this.updateStats = useUpdateStats(this);

    this.#livingsPositions = {};
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
      | ((oldState: BaseItem<Living>) => BaseItem<Living>)
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

    const cb = (pos: Position) => {
      const cell = map?.[pos.y]?.[pos.x];
      if (cell) {
        !res[pos.y] ? (res[pos.y] = {}) : false;
        // @ts-ignore
        !res[pos.y][pos.x] ? (res[pos.y][pos.x] = true) : false;
      }
    };

    runThroughGridArea(p, 1, {
      cb,
    });

    return res;
  }

  getLivingsByPosition({ mapId, y, x }: Position): BaseItem<Living>[] {
    if (this.#livingsPositions?.[mapId]?.[y]?.[x]) {
      const idArr = this.#livingsPositions[mapId]![y]![x]!;
      return idArr.map((i) => this.getById(i));
    } else {
      return [];
    }
  }

  updateLivingsPositions(
    previousPosition: Position | undefined,
    newPosition: Position | undefined,
    id: number
  ) {
    /**
     * this.#livingsPositions
     */
    const lp = this.#livingsPositions;

    /**
     * if position haven't changed then return from function
     */
    if (
      previousPosition?.mapId === newPosition?.mapId &&
      previousPosition?.y === newPosition?.y &&
      previousPosition?.x === newPosition?.x
    ) {
      return;
    }

    if (previousPosition) {
      const p = previousPosition;
      let arr = lp[p.mapId]![p.y]![p.x]!;
      lp[p.mapId]![p.y]![p.x]! = lp[p.mapId]![p.y]![p.x]!.filter(
        (i) => i !== id
      );
      /**
       * @@TODO: full reset check
       */
      if (!lp[p.mapId]![p.y]![p.x]!.length) {
        lp[p.mapId]![p.y]![p.x] = undefined;
      }
    }

    if (newPosition) {
      const p = newPosition;

      const map = lp[p.mapId];
      if (!map) lp[p.mapId] = {};

      const row = lp[p.mapId]![p.y];
      if (!row) lp[p.mapId]![p.y] = {};

      const cell = lp[p.mapId]![p.y]![p.x];
      if (!cell) {
        lp[p.mapId]![p.y]![p.x] = [id];
      } else {
        lp[p.mapId]![p.y]![p.x]!.push(id);
      }
    }
  }
}
