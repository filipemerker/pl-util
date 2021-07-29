import { getItems, getItem } from './utils';
import { ItemOptions, ItemsOptions } from './types';

import CITIES from './data/cities.json';

/**
 * getCity - generate one random polish city
 * @param {ItemOptions} options options object
 * @return {string}
 */
export const getCity = (options?: ItemOptions) => getItem(CITIES, options);

/**
 * getCities - generate array of random polish cities
 * @param {ItemsOptions} options options object
 * @return {string[]}
 */
export const getCities = (options?: ItemsOptions) => {
  const optionsWithShuffle = { ...options, shuffle: true };

  return getItems(CITIES)(optionsWithShuffle);
};
