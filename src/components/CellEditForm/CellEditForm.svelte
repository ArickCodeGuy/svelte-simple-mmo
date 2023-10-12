<script lang="ts">
import type { CellEditFormProps } from './types';
import DictionarySelect from '../DictionarySelect/DictionarySelect.svelte';

export let props: CellEditFormProps;
</script>

<form
  class="CellEditForm"
  on:submit={() => (props.submit ? props.submit(props.data) : null)}
>
  <DictionarySelect
    bind:value={props.data.typeId}
    required
    toNumber
    key={'cellTypeName'}
    label="Cell type"
  />
  <div class="buttons">
    <button class="btn" type="submit">update</button>
    <button
      type="button"
      class="btn"
      on:click={() => (props.delete ? props.delete(props.data) : null)}
      >delete</button
    >
  </div>
</form>

<style lang="scss">
.CellEditForm {
  display: grid;
  gap: 10px;
  .buttons {
    display: flex;
    gap: 10px;
  }
}
</style>
