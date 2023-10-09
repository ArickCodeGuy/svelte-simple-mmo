import type { ComponentType } from 'svelte';

export type ModalProps<T = unknown> = {
  component?: ComponentType;
  componentProps?: T;
  close?: () => void;
  title?: string;
} | null;
