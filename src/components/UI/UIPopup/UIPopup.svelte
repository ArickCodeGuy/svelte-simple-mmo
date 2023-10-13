<script lang="ts">
import { onMount } from 'svelte';
import UiIconButton from '../UIIcon/UIIconButton.svelte';
import type { UIPopupProps } from './types';

export let props: UIPopupProps;

const bgClick = (e: MouseEvent) => {
  if (e.target !== e.currentTarget) return;
  props.close && props.close();
};
const handleEsc = (e: KeyboardEvent) => {
  if (e.key === 'Escape') props.close && props.close();
};

onMount(() => {
  document.addEventListener('keydown', handleEsc);
  return () => {
    document.removeEventListener('keydown', handleEsc);
  };
});
</script>

<div
  class="UIPopup {props.isOpen && 'UIPopup--open'}"
  on:click={bgClick}
  on:keydown
>
  <div class="modal">
    <div class="modal__inner-box">
      <div class="modal__close">
        <UiIconButton icon={'close'} on:click={props.close} />
      </div>
      {#if props.title}
        <div class="modal__title">{props.title}</div>
      {/if}
      {#if props.component}
        <svelte:component this={props.component} props={props.componentProps} />
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.UIPopup {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: grid;
  place-items: center;
  padding: 15px;
  opacity: 0;
  transition: 0.3s;
  pointer-events: none;
  &.UIPopup--open {
    opacity: 1;
    pointer-events: auto;
    .modal {
      transform: translateY(0);
    }
  }
  @media (min-width: $breakpoint-lg) {
    padding: 40px;
  }
  .modal {
    position: relative;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    background-color: var(--bgc);
    padding: 15px;
    transform: translateY(-40px);
    transition: 0.3s;
    @media (min-width: $breakpoint-lg) {
      padding: 40px;
      width: 500px;
      height: 500px;
    }
    &__close {
      position: absolute;
      top: 15px;
      right: 15px;
    }
    &__inner-box {
      display: flex;
      flex-direction: column;
      min-height: 100%;
    }
    &__title {
      margin-bottom: 0.5em;
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
    }
  }
}
</style>
