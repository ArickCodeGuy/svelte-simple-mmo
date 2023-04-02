<script lang="ts">
  import '@mdi/font/css/materialdesignicons.css';
  export let icon: string;
  export let onClick: () => void | undefined;
</script>

<i
  class="mdi mdi-{icon}"
  on:click={() => {
    onClick && onClick();
  }}
  on:keydown
/>
