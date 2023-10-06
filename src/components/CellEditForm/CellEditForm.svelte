<script lang="ts">
import type { CellEditFormProps } from './types';

export let props: CellEditFormProps;
</script>

<div class="CellEditForm">
  <select bind:value={props.typeId}>
    <option value="1">1</option>
    <option value="2">2</option>
  </select>
  <button
    class="btn"
    type="submit"
    on:click={() => (props.submit ? props.submit() : null)}>submit</button
  >
</div>
