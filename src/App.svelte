<script lang="ts">
import { Router, Route } from 'svelte-navigator';
import Layout from './layout/default.svelte';
import Main from './routes/index.svelte';
import Character from './routes/Character/Character.svelte';
import FightLogs from './routes/FightLogs/FightLogs.svelte';
import Fight from './routes/Fight/Fight.svelte';
import { BASE_PATH, ROUTE_NAMES_ENUM } from './constants/base';
import MapEdit from './routes/MapEdit/MapEdit.svelte';
import type { UINotificationProps } from './components/UI/UINotification/types';
import { notificationsStore } from './store/notifications';

let notifications: UINotificationProps[] = [];
notificationsStore.subscribe((v) => {
  notifications = v.items;
});
</script>

<Router basepath={BASE_PATH}>
  <Layout {notifications}>
    <Route path={ROUTE_NAMES_ENUM.MAIN}><Main /></Route>
    <Route path={ROUTE_NAMES_ENUM.CHARACTER}><Character /></Route>
    <Route path={ROUTE_NAMES_ENUM.FIGHT_LOGS}><FightLogs /></Route>
    <Route path={ROUTE_NAMES_ENUM.FIGHT}><Fight /></Route>
    <Route path={ROUTE_NAMES_ENUM.MAP_EDIT}><MapEdit /></Route>
  </Layout>
</Router>
