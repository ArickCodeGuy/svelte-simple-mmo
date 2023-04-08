<script lang="ts">
import '~/assets/styles/style.scss';
import Header from '../components/Header.svelte';
import Footer from '../components/Footer.svelte';
import UiPopup from '@/components/UI/Popup/UIPopup.svelte';
import { popupState } from '@/store/popup';
import type { UIPopupState } from '@/components/UI/Popup/types';

let popup: UIPopupState;
popupState.subscribe((v) => (popup = v));
</script>

<div class="app">
  <Header />

  <main>
    <slot />
  </main>

  <Footer />

  <UiPopup {...popup} />
</div>
