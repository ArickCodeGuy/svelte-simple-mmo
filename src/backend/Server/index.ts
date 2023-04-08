import type { FightController } from '../Controllers/Fights';
import type { LivingsController } from '../Controllers/Livings';
import type { DirectionalMove, Living } from '../Controllers/Livings/types';
import type { MapController } from '../Controllers/Maps';
import type { MapArea } from '../Controllers/Maps/types';
import { useEndFight } from './actions/endFight';
import { useFightTurn } from './actions/fightTurn';
import { useGetFightsLivings } from './actions/getFightsLivings';
import { useInitFight } from './actions/initFight';

export class ServerController {
  livingsController: LivingsController;
  mapController: MapController;
  fightController: FightController;

  initFight: ReturnType<typeof useInitFight>;
  getFightsLivings: ReturnType<typeof useGetFightsLivings>;
  fightTurn: ReturnType<typeof useFightTurn>;
  endFight: ReturnType<typeof useEndFight>;

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

    this.init();
  }
  init() {
    this.mapController.getState().forEach((map) => {
      if (!map.npcSettings) return;

      map.npcSettings.forEach((npcSetting) => {
        const area: MapArea =
          npcSetting.area || this.mapController.getMapArea(map.id);

        for (let i = 0; i < npcSetting.amount; i++) {
          const { x, y } = this.mapController.getRandomPositionFromArea(area);

          const position = {
            mapId: map.id,
            x,
            y,
          };
          this.livingsController.createFromId(npcSetting.id, position);
        }
      });
    });
  }
  tryDirectionalMove(id: number, direction: DirectionalMove) {
    const newLivingState = this.livingsController.directionalMove(
      id,
      direction
    )!;

    if (!this.mapController.isMovable(newLivingState.position))
      // `You can't go to ${newLivingState.position}`
      return this.livingsController.getById(id)!;

    if (newLivingState.activity) {
      // `You are busy. You can not walk`;
      return this.livingsController.getById(id)!;
    }

    return this.livingsController.update(id, newLivingState);
  }
}
