import { createGetItems, getItem, shuffle } from './utils';
import { ItemOptions, ItemsOptions } from './types';

import CITIES from './data/cities.json';

/**
 * getCity - generate one random polish city
 * @param {ItemOptions} options options object
 * @return {string}
 */
export function getCity(options?: ItemOptions) {
  const cities = shuffle(CITIES);

  return getItem(cities, options);
}

/**
 * getCities - generate array of random polish cities
 * @param {ItemsOptions} options options object
 * @return {string[]}
 */
export function getCities(options?: ItemsOptions) {
  const cities = shuffle(CITIES);

  return createGetItems(cities)(options);
}
