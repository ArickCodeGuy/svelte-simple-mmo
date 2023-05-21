<script lang="ts">
import '@/assets/styles/style.scss';
import Header from '../components/Header/Header.svelte';
import Footer from '../components/Footer.svelte';
import type { HeaderProps } from '@/components/Header/types';
import Modal from '@/modal/Modal.svelte';

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

  <Modal />
</div>
