import {
  BASE_PATH,
  ROUTE_NAMES_ENUM,
  type ROUTE_NAMES,
} from '@/constants/base';
import { navigate } from 'svelte-routing';

export const myNavigate = (location: ROUTE_NAMES) => {
  navigate(`${BASE_PATH}${ROUTE_NAMES_ENUM[location]}`);
};
