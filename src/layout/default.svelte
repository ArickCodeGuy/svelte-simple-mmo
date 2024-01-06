<script lang="ts">
import '@/assets/styles/style.scss';
import Header from '../components/Header/Header.svelte';
import Footer from '../components/Footer/Footer.svelte';
import type { HeaderProps } from '@/components/Header/types';
import Modal from '@/modal/Modal.svelte';
import { navigation } from './utils/navigation';
import UiNavigation from '@/components/UI/UINavigation/UINavigation.svelte';
import type { UINavigationProps } from '@/components/UI/UINavigation/types';
import { links } from './utils/header';
import UiBurger from '@/components/UI/UINavigation/UIBurger.svelte';
import UiNotification from '@/components/UI/UINotification/UINotification.svelte';
import type { UINotificationProps } from '@/components/UI/UINotification/types';

const navigationProps: UINavigationProps = {
  groups: navigation,
  fixed: true,
};
let navigationClosed = true;

const headerProps: HeaderProps = {
  links,
};

export let notifications: UINotificationProps[] = [];
</script>

<div class="app">
  <Header props={headerProps}>
    <UiBurger bind:value={navigationClosed} />
  </Header>

  <UiNavigation props={navigationProps} bind:closed={navigationClosed} />

  <main>
    <slot />
  </main>

  <Footer />

  <div class="notifications">
    {#if notifications}
      {#each notifications as props}
        <UiNotification {props} />
      {/each}
    {/if}
  </div>

  <Modal />
</div>

<style lang="scss">
@import '@/assets/styles/vars.scss';
.notifications {
  display: flex;
  grid-gap: var(--column-gutter);
  justify-content: flex-start;
  flex-direction: column;
  pointer-events: none;
  padding: 15px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  @media (min-width: $breakpoint-lg) {
    padding: 20px;
  }
}
</style>
