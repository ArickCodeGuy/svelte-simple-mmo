<script lang="ts">
import type { UINotificationProps } from './types';

export let props: UINotificationProps;

$: type = props.type || 'text';
</script>

<div
  class="UINotification"
  style:--border-color={`var(--border-color-${type})`}
>
  <div class="UINotification__title">{props.title}</div>
  {#if props.text}
    <div class="UINotification__text">{props.text}</div>
  {/if}
</div>

<style lang="scss">
.UINotification {
  padding: 5px 5px 4px 5px;
  background-color: rgba(var(--rgba-bgc), 0.6);
  --border-color-warn: yellow;
  --border-color-error: red;
  --border-color-text: var(--contrast);
  border-bottom: 1px solid var(--border-color);
  &__title {
    font-size: 2em;
  }
  &__text {
    margin-top: 1em;
  }
}
</style>
