<script lang="ts">
import BzFightLog from '@/components/BZ/BZFightLog/BZFightLog.svelte';
import { useParams } from 'svelte-navigator';

const params = useParams();

$: id = Number($params.id);
</script>

<section class="section">
  <div class="container">
    <h1 class="h1">Fight Log</h1>
    <BzFightLog {id} />
  </div>
</section>
