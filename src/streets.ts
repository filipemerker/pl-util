import { getItems, getItem } from './utils';
import { ItemOptions, ItemsOptions } from './types';

import STREETS from './data/streets.json';

/**
 * getStreet - generate one random polish city
 * @param {ItemOptions} options options object
 * @return {string}
 */
export const getStreet = (options?: ItemOptions) => getItem(STREETS, options);

/**
 * getStreets - generate array of random polish streets
 * @param {ItemsOptions} options options object
 * @return {string[]}
 */
export const getStreets = (options?: ItemsOptions) => {
  const optionsWithShuffle = { ...options, shuffle: true };

  return getItems(STREETS)(optionsWithShuffle);
};
