import type { LivingsTable } from '../Livings';
import type { MapTable } from '../MapTable';
import type { FightTable } from '../fight';
import type { MapArea } from '../MapTable/types';
import type { DirectionalMove, Living } from '../Livings/types';
import { directionalMove } from '../Livings/actions/directionalMove';

export class ServerTables {
  livingsTable: LivingsTable;
  mapTable: MapTable;
  fightTable: FightTable;

  constructor(
    livingsTable: LivingsTable,
    mapTable: MapTable,
    fightTable: FightTable
  ) {
    this.livingsTable = livingsTable;
    this.mapTable = mapTable;
    this.fightTable = fightTable;

    this.init();
  }
  init() {
    this.mapTable.getMaps().forEach((map) => {
      if (!map.npcSettings) return;

      map.npcSettings.forEach((npcSetting) => {
        const area: MapArea =
          npcSetting.area || this.mapTable.getMapArea(map.id);

        for (let i = 0; i < npcSetting.amount; i++) {
          const { x, y } = this.mapTable.randomPositionFromArea(area);

          const position = {
            mapId: map.id,
            x,
            y,
          };
          this.livingsTable.createNpc(npcSetting.id, position);
        }
      });
    });
  }
  tryDirectionalMove(id: number, direction: DirectionalMove): Living {
    const living = this.livingsTable.findById(id);
    const newLivingState = directionalMove(living, direction);

    if (!this.mapTable.isMovable(newLivingState.position))
      throw new Error(`You can't go to ${newLivingState.position}`);

    return this.livingsTable.update(id, newLivingState);
  }
  initFight(teamOne: number[], teamTwo: number[]) {
    const fightInstance = this.fightTable.initFight(teamOne, teamTwo);
    const members = [...teamOne, ...teamTwo].map((id) =>
      this.livingsTable.findById(id)
    );
    members.forEach((fightMember) =>
      this.livingsTable.update(fightMember.id, {
        ...fightMember,
        activity: 'FIGHT',
      })
    );
    console.log(members);
  }
}
