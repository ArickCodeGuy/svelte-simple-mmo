<script>
import { Router, Route } from 'svelte-routing';
import Layout from './layout/default.svelte';
import Main from './routes/index.svelte';
import Character from './routes/Character/Character.svelte';
</script>

<Router basepath="/svelte-simple-mmo/">
  <Layout>
    <Route path="/"><Main /></Route>
    <Route path="/character"><Character /></Route>
  </Layout>
</Router>
