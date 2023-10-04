<script lang="ts">
import '@mdi/font/css/materialdesignicons.css';
export let icon: string;
export let size: string | number = 16;

const defineSizeBind = (s: string | number): string => {
  if (typeof s === 'number') return `${s}px`;

  return s;
};

$: sizeBind = `--size: ${defineSizeBind(size)}`;
</script>

<i class="mdi mdi-{icon}" style={sizeBind} />

<style>
.mdi {
  display: inline-block;
  --size: 16px;
  vertical-align: middle;
  line-height: var(--size);
  width: var(--size);
  height: var(--size);
}
</style>
