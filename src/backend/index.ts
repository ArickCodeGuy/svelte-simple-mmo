import { FightLogsController } from './Controllers/FightLogs';
import { FightController } from './Controllers/Fights';
import { LivingsController } from './Controllers/Livings';
import { MapController } from './Controllers/Maps';
import { ServerController } from './Server';

const livingsController = new LivingsController('LIVINGS');
const mapController = new MapController('MAPS');
const fightController = new FightController('FIGHTS');
const fightLogsController = new FightLogsController('FIGHT_LOGS');

export const Server = new ServerController(
  livingsController,
  mapController,
  fightController
);
