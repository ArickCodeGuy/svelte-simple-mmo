import { FightController } from './Controllers/Fights';
import { LivingsController } from './Controllers/Livings';
import { MapController } from './Controllers/Maps';
import { ServerController } from './Server';

const ServerLivingsController = new LivingsController('LIVINGS');
const ServerMapController = new MapController('MAPS');
const ServerFightController = new FightController('FIGHTS');

export const Server = new ServerController(
  ServerLivingsController,
  ServerMapController,
  ServerFightController
);
