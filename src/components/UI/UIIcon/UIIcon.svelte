<script lang="ts">
export let icon: string;
</script>

<i class="mdi mdi-{icon}" />

<style lang="scss">
@import '@/assets/styles/_vars.scss';

.mdi {
  display: inline-block;
  vertical-align: middle;
  --size: 10px;
  font-size: var(--size);
  line-height: var(--size);
  width: var(--size);
  height: var(--size);
  @media (min-width: $breakpoint-lg) {
    --size: 16px;
  }
}
</style>
