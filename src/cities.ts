import { createGetItems, getItem, shuffle } from './utils';
import { Options } from './types';

import CITIES from './data/cities.json';

export function getCity(options?: Options) {
  const cities = shuffle(CITIES);

  return getItem(cities, options);
}

export function getCities(options?: Options) {
  const cities = shuffle(CITIES);

  return createGetItems(cities)(options);
}
