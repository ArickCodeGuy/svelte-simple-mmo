<script>
import { Router, Route } from 'svelte-routing';
import Layout from './routes/+layout.svelte';
import Page from './routes/+page.svelte';
</script>

<Router basepath="/svelte-simple-mmo/">
  <Layout>
    <Route path="/"><Page /></Route>
  </Layout>
</Router>
