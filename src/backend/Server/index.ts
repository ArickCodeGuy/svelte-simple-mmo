import type { FightController } from '../Controllers/Fights';
import type { LivingsController } from '../Controllers/Livings';
import type { MapController } from '../Controllers/Maps';
import { useEndFight } from './actions/endFight';
import { useFightTurn } from './actions/fightTurn';
import { useGetFightInfo } from './actions/getFightInfo';
import { useGetLivingState } from './api/getLivingState';
import { useGetTeamExp } from './actions/getTeamExp';
import { useInit } from './actions/init';
import { useInitFight } from './api/initFight';
import { useLeaveFight } from './api/leaveFight';
import { useRespawn } from './actions/respanwn';
import { useTryDirectionalMove } from './api/tryDirectionalMove';
import { useUpdateStats } from './api/updateStats';
import type { FightLogController } from '../Controllers/FightLogs';

export class ServerController {
  livingsController: LivingsController;
  mapController: MapController;
  fightController: FightController;
  fightLogController: FightLogController;

  fightTurn: ReturnType<typeof useFightTurn>;
  endFight: ReturnType<typeof useEndFight>;
  getFightInfo: ReturnType<typeof useGetFightInfo>;
  getTeamExp: ReturnType<typeof useGetTeamExp>;
  respawn: ReturnType<typeof useRespawn>;
  init: ReturnType<typeof useInit>;

  initFight: ReturnType<typeof useInitFight>;
  leaveFight: ReturnType<typeof useLeaveFight>;
  getLivingState: ReturnType<typeof useGetLivingState>;
  tryDirectionalMove: ReturnType<typeof useTryDirectionalMove>;
  updateStats: ReturnType<typeof useUpdateStats>;

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
    this.fightTurn = useFightTurn(this);
    this.endFight = useEndFight(this);
    this.getFightInfo = useGetFightInfo(this);
    this.getTeamExp = useGetTeamExp(this);
    this.respawn = useRespawn(this);
    this.init = useInit(this);

    this.initFight = useInitFight(this);
    this.leaveFight = useLeaveFight(this);
    this.getLivingState = useGetLivingState(this);
    this.tryDirectionalMove = useTryDirectionalMove(this);
    this.updateStats = useUpdateStats(this);

    this.init();
  }
}
