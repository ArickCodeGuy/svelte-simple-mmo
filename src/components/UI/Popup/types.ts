import type { ComponentType } from 'svelte';

export type UIPopupProps = {
  title?: string;
  content?: string;
  component?: ComponentType;
  actions?: UIPopupAction[];
  close?: () => void;

  [x: string]: unknown;
};

export type UIPopupState = {
  shown?: boolean;
  close?: () => void;
  props?: UIPopupProps;
};

export type UIPopupAction = {
  f: () => void;
  content: string;
};
