import {
  BASE_PATH,
  ROUTE_NAMES_ENUM,
  type ROUTE_NAMES,
} from '@/constants/base';
import { navigate } from 'svelte-routing';

type Options = {
  params?: Record<string, string | number>;
};

export const myNavigate = (location: ROUTE_NAMES, options: Options = {}) => {
  let path = `${BASE_PATH}${ROUTE_NAMES_ENUM[location]}`;
  console.log(path, options.params);

  if (options.params) {
    for (const param in options.params) {
      const paramValue = options.params[param];

      path = path.replace(`:${param}`, String(paramValue));
    }
  }

  navigate(path);
};
