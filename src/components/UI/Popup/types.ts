import type { ComponentType } from 'svelte';

export type UIPopupProps = {
  title?: string;
  content?: string;
  component?: ComponentType;

  [x: string]: unknown;
};

export type UIPopupState = {
  shown?: boolean;
  close?: () => void;
  props?: UIPopupProps;
};
