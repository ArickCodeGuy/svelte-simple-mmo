<script lang="ts">
import UiPopup from '@/components/UI/UIPopup/UIPopup.svelte';
import type { ModalProps } from './types';
import { modalPropsToUIPopupProps } from './utils/modalPropsToUIPopupProps';
import { modalState } from './store';

let modal: ModalProps;
modalState.subscribe((v) => (modal = v));

$: props = modalPropsToUIPopupProps(modal);
</script>

<UiPopup {props} />
