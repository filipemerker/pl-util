import { createGetItems, getItem, shuffle } from './utils';
import { ItemOptions, ItemsOptions } from './types';

import CITIES from './data/cities.json';

export function getCity(options?: ItemOptions) {
  const cities = shuffle(CITIES);

  return getItem(cities, options);
}

export function getCities(options?: ItemsOptions) {
  const cities = shuffle(CITIES);

  return createGetItems(cities)(options);
}
