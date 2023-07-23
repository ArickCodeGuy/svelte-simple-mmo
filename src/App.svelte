<script>
import { Router, Route } from 'svelte-routing';
import Layout from './layout/default.svelte';
import Main from './routes/index.svelte';
import Character from './routes/Character/Character.svelte';
import FightLogs from './routes/FightLogs/FightLogs.svelte';
</script>

<Router basepath="/svelte-simple-mmo/">
  <Layout>
    <Route path="/"><Main /></Route>
    <Route path="/character"><Character /></Route>
    <Route path="/fight-logs"><FightLogs /></Route>
  </Layout>
</Router>
