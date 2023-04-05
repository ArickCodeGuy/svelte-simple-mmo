<script lang="ts">
  import UiIcon from './UIIcon.svelte';

  export let icon: string;
  export let onClick: () => void = () => {};
</script>

<button
  class="button UIIconButton"
  type="button"
  on:click={() => {
    onClick && onClick();
  }}
>
  <UiIcon {icon} />
  <slot />
</button>

<style lang="scss">
  .UIIconButton {
    cursor: pointer;
    display: flex;
    gap: 15px;
  }
</style>
