import type { FightController } from '../Controllers/Fights';
import type { LivingsController } from '../Controllers/Livings';
import type { MapController } from '../Controllers/Maps';
import { useInit } from './actions/init';
import { useRespawn } from './actions/respanwn';
import type { FightLogController } from '../Controllers/FightLogs';
import { useFightActions } from './actions/fight';
import { usePublicApi } from './api';

export class ServerController {
  livingsController: LivingsController;
  mapController: MapController;
  fightController: FightController;
  fightLogController: FightLogController;

  fightActions: ReturnType<typeof useFightActions>;
  publicApi: ReturnType<typeof usePublicApi>;
  respawn: ReturnType<typeof useRespawn>;
  init: ReturnType<typeof useInit>;

  constructor(
    livingsController: LivingsController,
    mapController: MapController,
    fightController: FightController,
    fightLogController: FightLogController
  ) {
    this.livingsController = livingsController;
    this.mapController = mapController;
    this.fightController = fightController;
    this.fightLogController = fightLogController;

    // actions
    this.fightActions = useFightActions(this);
    this.publicApi = usePublicApi(this);
    this.respawn = useRespawn(this);
    this.init = useInit(this);

    this.init();
  }
}
