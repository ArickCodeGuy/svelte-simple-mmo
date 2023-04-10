import type { FightController } from '../Controllers/Fights';
import type { LivingsController } from '../Controllers/Livings';
import type { MapController } from '../Controllers/Maps';
import { useEndFight } from './actions/endFight';
import { useFightTurn } from './actions/fightTurn';
import { useGetFightInfo } from './actions/getFightInfo';
import { useGetFightsLivings } from './actions/getFightsLivings';
import { useGetLivingState } from './actions/getLivingState';
import { useInit } from './actions/init';
import { useInitFight } from './actions/initFight';
import { useLeaveFight } from './actions/leaveFight';
import { useRespawn } from './actions/respanwn';
import { useTryDirectionalMove } from './actions/tryDirectionalMove';

export class ServerController {
  livingsController: LivingsController;
  mapController: MapController;
  fightController: FightController;

  initFight: ReturnType<typeof useInitFight>;
  getFightsLivings: ReturnType<typeof useGetFightsLivings>;
  fightTurn: ReturnType<typeof useFightTurn>;
  endFight: ReturnType<typeof useEndFight>;
  getLivingState: ReturnType<typeof useGetLivingState>;
  getFightInfo: ReturnType<typeof useGetFightInfo>;
  tryDirectionalMove: ReturnType<typeof useTryDirectionalMove>;
  leaveFight: ReturnType<typeof useLeaveFight>;
  respawn: ReturnType<typeof useRespawn>;
  init: ReturnType<typeof useInit>;

  constructor(
    livingsController: LivingsController,
    mapController: MapController,
    fightController: FightController
  ) {
    this.livingsController = livingsController;
    this.mapController = mapController;
    this.fightController = fightController;

    // actions
    this.initFight = useInitFight(this);
    this.getFightsLivings = useGetFightsLivings(this);
    this.fightTurn = useFightTurn(this);
    this.endFight = useEndFight(this);
    this.getLivingState = useGetLivingState(this);
    this.getFightInfo = useGetFightInfo(this);
    this.tryDirectionalMove = useTryDirectionalMove(this);
    this.leaveFight = useLeaveFight(this);
    this.respawn = useRespawn(this);
    this.init = useInit(this);

    this.init();
  }
}