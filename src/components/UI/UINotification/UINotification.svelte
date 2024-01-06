<script lang="ts">
import type { TransitionConfig } from 'svelte/types/runtime/transition';
import type { UINotificationProps } from './types';
import { sineInOut } from 'svelte/easing';

export let props: UINotificationProps;

$: type = props.type || 'text';

function slide(node: HTMLElement, params?: TransitionConfig): TransitionConfig {
  const duration = params?.duration || 400;

  return {
    delay: params?.delay || 0,
    duration,
    easing: sineInOut,
    css: (t, u) =>
      `transform: translate(${
        -40 * u
      }px); opacity: ${t}; transition: ${duration}ms`,
  };
}
</script>

<div
  class="UINotification"
  style:--border-color={`var(--border-color-${type})`}
  transition:slide
>
  <div class="UINotification__title">{props.title}</div>
  {#if props.text}
    <div class="UINotification__text">{props.text}</div>
  {/if}
</div>

<style lang="scss">
@import '@/assets/styles/vars.scss';
.UINotification {
  position: relative;
  padding: 15px;
  background-color: rgba(var(--rgba-bgc), 0.6);
  --border-color-warn: yellow;
  --border-color-error: red;
  --border-color-text: var(--contrast);
  --border-color-success: lightgreen;
  max-width: 100%;
  width: 200px;
  @media (min-width: $breakpoint-lg) {
    width: 400px;
  }
  &__title {
    font-size: 1.3em;
  }
  &__text {
    margin-top: 0.5em;
  }
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--border-color);
    bottom: 0;
    left: 0;
  }
}
</style>
