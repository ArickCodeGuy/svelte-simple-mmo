<script>
import { Router, Route } from 'svelte-routing';
import Layout from './layout/default.svelte';
import Main from './routes/index.svelte';
import Character from './routes/Character/Character.svelte';
import FightLogs from './routes/FightLogs/FightLogs.svelte';
import FightLogItem from './routes/FightLogs/FightLogItem.svelte';
</script>

<Router basepath="/svelte-simple-mmo/">
  <Layout>
    <Route path="/"><Main /></Route>
    <Route path="/character"><Character /></Route>
    <Route path="/fight-logs"><FightLogs /></Route>
    <Route path="/fight-logs/:id"><FightLogItem /></Route>
  </Layout>
</Router>
