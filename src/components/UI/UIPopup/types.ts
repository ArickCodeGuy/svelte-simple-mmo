import type { ComponentType } from 'svelte';

export type UIPopupProps = {
  component?: ComponentType;
  close?: () => void;
  componentProps?: unknown;
  isOpen: boolean;
};
