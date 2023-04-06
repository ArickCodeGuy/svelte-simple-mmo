<script lang="ts">
  import { onMount } from 'svelte';
  import UiIconButton from '../Icon/UIIconButton.svelte';
  import type { UIPopupProps } from './types';

  const bgClick = (e: MouseEvent) => {
    if (e.target !== e.currentTarget) return;
    close();
  };

  onMount(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  });

  export let shown: boolean = false;
  export let close: () => void = () => {};
  export let props: UIPopupProps | undefined = undefined;
</script>

<div class="UIPopup {shown && 'UIPopup--open'}" on:click={bgClick} on:keydown>
  <div class="modal">
    <div class="modal__inner-box">
      <div class="modal__close">
        <UiIconButton icon={'close'} onClick={close} />
      </div>
      {#if props}
        {#if props.title}<div class="modal__title">{props.title}</div>{/if}
        {#if props.content}<div class="modal__content">
            {props.content}
          </div>{/if}
        {#if props.component}
          <svelte:component this={props.component} {...props} />
        {/if}
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  @import '~/assets/styles/vars';

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
      width: 500px;
      height: 500px;
      overflow-y: scroll;
      background-color: var(--bgc);
      padding: 15px;
      transform: translateY(-40px);
      transition: 0.3s;
      @media (min-width: $breakpoint-lg) {
        padding: 40px;
      }
      &__close {
        position: absolute;
        top: 15px;
        right: 15px;
      }
      &__inner-box {
        // overflow-y: scroll;
      }
    }
  }
</style>
