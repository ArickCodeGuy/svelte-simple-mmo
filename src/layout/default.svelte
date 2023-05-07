<script lang="ts">
import '@/assets/styles/style.scss';
import Header from '../components/Header/Header.svelte';
import Footer from '../components/Footer.svelte';
import UiPopup from '@/components/UI/Popup/UIPopup.svelte';
import { popupState } from '@/store/popup/popup';
import type { UIPopupProps } from '@/components/UI/Popup/types';
import type { HeaderProps } from '@/components/Header/types';

let popup: UIPopupProps;
popupState.subscribe((v) => (popup = v));

const headerProps: HeaderProps = {
  links: [
    {
      href: '/svelte-simple-mmo/',
      text: 'Main',
    },
    {
      href: '/svelte-simple-mmo/character/',
      text: 'Character',
    },
  ],
};
</script>

<div class="app">
  <Header props={headerProps} />

  <main>
    <slot />
  </main>

  <Footer />

  <UiPopup props={popup} />
</div>
