import type { GlobalInfo } from '@/backend/Server/types';
import {
  BASE_PATH,
  ROUTE_NAMES_ENUM,
  type ROUTE_NAMES,
} from '@/constants/base';
import { globalInfoState } from '@/store/player';
import { navigate } from 'svelte-navigator';

type Options = {
  params?: Record<string, string | number>;
};

const getPath = (location: ROUTE_NAMES, options: Options = {}) => {
  let path = `${BASE_PATH}${ROUTE_NAMES_ENUM[location]}`;

  if (options.params) {
    for (const param in options.params) {
      const paramValue = options.params[param];

      path = path.replace(`:${param}`, String(paramValue));
    }
  }

  return path;
};

let globalInfo: GlobalInfo;
globalInfoState.subscribe((v) => (globalInfo = v));

export const myNavigate = (location: ROUTE_NAMES, options: Options = {}) => {
  if (!globalInfo) return;

  if (globalInfo.fight?.instance.id) {
    console.warn(`myNavigate: Currently in fight. Can't leave fight page`);
    const id = globalInfo.fight?.instance.id;
    const path = getPath('FIGHT', { params: { id } });

    navigate(path);
    return;
  }

  const path = getPath(location, options);

  navigate(path);
};
