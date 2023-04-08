import type { FightController } from '../Controllers/Fights';
import type { LivingsController } from '../Controllers/Livings';
import type { DirectionalMove, Living } from '../Controllers/Livings/types';
import type { MapController } from '../Controllers/Maps';
import type { MapArea } from '../Controllers/Maps/types';
import { useEndFight } from './actions/endFight';
import { useFightTurn } from './actions/fightTurn';
import { useGetFightsLivings } from './actions/getFightsLivings';
import { useGetLivingState } from './actions/getLivingState';
import { useInit } from './actions/init';
import { useInitFight } from './actions/initFight';
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
  tryDirectionalMove: ReturnType<typeof useTryDirectionalMove>;
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
    this.tryDirectionalMove = useTryDirectionalMove(this);
    this.init = useInit(this);

    this.init();
  }
}
