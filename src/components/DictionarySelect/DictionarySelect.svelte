<script lang="ts">
import type { Dictionary } from '@/types/types';
import { dictionaryKeyToSelectOptions } from './utils/dictionaryKeyToSelectOptions';
import { frontDictionaryState } from '@/store/dictionary';

export let key: string;
export let value: unknown;
export let label: string = '';
export let required: boolean = false;
export let toNumber: boolean = false;
let dictionary: Dictionary;
frontDictionaryState.subscribe((v) => (dictionary = v));

$: options = dictionaryKeyToSelectOptions(dictionary[key], {
  toNumber,
});
</script>

{#if label}<div>{label}</div>{/if}
<select bind:value {required}>
  <option value={null} />
  {#each options as option}
    <option value={option.value}>{option.label}</option>
  {/each}
</select>
