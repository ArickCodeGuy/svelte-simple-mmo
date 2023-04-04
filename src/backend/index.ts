import { LivingsTable } from './Livings';
import { MapTable } from './MapTable';
import { ServerTables } from './Tables';
import { FightTable } from './fight';

const ServerLivingsTable = new LivingsTable();
const ServerMapTable = new MapTable();
const ServerFightTable = new FightTable();

export const Server = new ServerTables(
  ServerLivingsTable,
  ServerMapTable,
  ServerFightTable
);
