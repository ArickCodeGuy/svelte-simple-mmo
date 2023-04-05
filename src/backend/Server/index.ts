import type { FightController } from '../Controllers/Fights';
import type { LivingsController } from '../Controllers/Livings';
import type { DirectionalMove, Living } from '../Controllers/Livings/types';
import type { MapController } from '../Controllers/Maps';
import type { MapArea } from '../Controllers/Maps/types';

export class ServerController {
  livingsController: LivingsController;
  mapController: MapController;
  fightController: FightController;

  constructor(
    livingsController: LivingsController,
    mapController: MapController,
    fightController: FightController
  ) {
    this.livingsController = livingsController;
    this.mapController = mapController;
    this.fightController = fightController;

    this.init();
  }
  init() {
    this.mapController.maps.forEach((map) => {
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
  tryDirectionalMove(id: number, direction: DirectionalMove): Living {
    const living = this.livingsController.findById(id);
    const newLivingState = this.livingsController.directionalMove(
      id,
      direction
    );

    if (!this.mapController.isMovable(newLivingState.position))
      throw new Error(`You can't go to ${newLivingState.position}`);

    return this.livingsController.update(id, newLivingState);
  }
  initFight(teamOne: number[], teamTwo: number[]) {
    const fightInstance = this.fightController.initFight(teamOne, teamTwo);
    const members = [...teamOne, ...teamTwo].map((id) =>
      this.livingsController.findById(id)
    );
    members.forEach((fightMember) =>
      this.livingsController.update(fightMember.id, {
        ...fightMember,
        activity: 'FIGHT',
      })
    );
    console.log(members);
  }
}
