import type { FightController } from '../Controllers/Fights';
import type { LivingsController } from '../Controllers/Livings';
import type { MapController } from '../Controllers/Maps';
import { useInit } from './actions/init';
import { useRespawn } from './actions/respanwn';
import type { FightLogController } from '../Controllers/FightLogs';
import { useFightActions } from './actions/fight';
import { usePublicApi } from './api';
import { useFightLogActions } from './actions/fightLog';
import type { ItemsController } from '../Controllers/Items';
import { useLivingActions } from './actions/living';

export class ServerController {
  livingsController: LivingsController;
  mapController: MapController;
  fightController: FightController;
  fightLogController: FightLogController;
  itemsController: ItemsController;

  fightActions: ReturnType<typeof useFightActions>;
  fightLogActions: ReturnType<typeof useFightLogActions>;
  livingActions: ReturnType<typeof useLivingActions>;
  publicApi: ReturnType<typeof usePublicApi>;
  respawn: ReturnType<typeof useRespawn>;
  init: ReturnType<typeof useInit>;

  /**
   * key: FightInstance['id']
   * value: timeoutId
   */
  fightTimeoutMap: Record<number, number>;

  constructor(
    livingsController: LivingsController,
    mapController: MapController,
    fightController: FightController,
    fightLogController: FightLogController,
    itemsController: ItemsController
  ) {
    this.livingsController = livingsController;
    this.mapController = mapController;
    this.fightController = fightController;
    this.fightLogController = fightLogController;
    this.itemsController = itemsController;

    // actions
    this.fightActions = useFightActions(this);
    this.fightLogActions = useFightLogActions(this);
    this.livingActions = useLivingActions(this);
    this.publicApi = usePublicApi(this);
    this.respawn = useRespawn(this);
    this.init = useInit(this);

    this.fightTimeoutMap = {};

    this.init();
  }
}
