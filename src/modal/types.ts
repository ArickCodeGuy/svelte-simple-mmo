import type { ComponentType } from 'svelte';

export type ModalProps = {
  component?: ComponentType;
  componentProps?: unknown;
  close?: () => void;
  title?: string;
} | null;
