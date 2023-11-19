import type { Updater } from '../types';

export const updaterFunction = <T>(
  updater: Updater<T>,
  oldState: T | undefined
): T => {
  if (typeof updater === 'function') {
    return updater(oldState);
  } else {
    return updater;
  }
};
