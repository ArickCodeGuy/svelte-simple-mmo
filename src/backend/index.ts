import { FightController } from './Controllers/Fights';
import { LivingsController } from './Controllers/Livings';
import { MapController } from './Controllers/Maps';
import { ServerController } from './Server';

const ServerLivingsController = new LivingsController();
const ServerMapController = new MapController();
const ServerFightController = new FightController();

export const Server = new ServerController(
  ServerLivingsController,
  ServerMapController,
  ServerFightController
);
