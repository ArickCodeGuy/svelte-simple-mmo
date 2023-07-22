<script lang="ts">
import '@/assets/styles/style.scss';
import Header from '../components/Header/Header.svelte';
import Footer from '../components/Footer.svelte';
import type { HeaderProps } from '@/components/Header/types';
import Modal from '@/modal/Modal.svelte';
import { navigation } from './utils/navigation';
import UiNavigation from '@/components/UI/Navigation/UINavigation.svelte';
import type { UINavigationProps } from '@/components/UI/Navigation/types';
import { links } from './utils/header';
import UiBurger from '@/components/UI/Navigation/UIBurger.svelte';

const navigationProps: UINavigationProps = {
  groups: navigation,
  fixed: true,
  closed: true /* JSON.parse(
    localStorage.getItem('navigationState') || 'false'
  ) as boolean */,
};

const headerProps: HeaderProps = {
  links,
};
</script>

<div class="app">
  <Header props={headerProps}>
    <UiBurger
      on:click={() => (navigationProps.closed = !navigationProps.closed)}
    />
  </Header>

  <UiNavigation props={navigationProps} />

  <main>
    <slot />
  </main>

  <Footer />

  <Modal />
</div>
