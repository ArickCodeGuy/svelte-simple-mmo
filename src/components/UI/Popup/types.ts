export type UIPopupProps = {
  title: string;
  content: string;
};

export type UIPopupState = {
  shown?: boolean;
  close?: () => void;
  props?: UIPopupProps;
};
