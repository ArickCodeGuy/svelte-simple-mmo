import type { ComponentType } from 'svelte';

export type UIPopupProps = {
  title?: string;
  component?: ComponentType;
  close?: () => void;
  componentProps?: unknown;
  isOpen: boolean;
};
