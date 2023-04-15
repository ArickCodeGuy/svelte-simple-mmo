import type { ComponentType } from 'svelte';

export type UIPopupProps = {
  component?: ComponentType;
  close?: () => void;
  title?: string;
  componentProps?: unknown;
  isOpen: boolean;
};

export type UIPopupAction = {
  f: () => void;
  content: string;
};
