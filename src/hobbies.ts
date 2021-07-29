import { createGetItems, getItem } from './utils';
import { ItemOptions, ItemsOptions } from './types';

import HOBBIES from './data/hobby.json';

/**
 * getHobby - generate one random hobby
 * @param {ItemOptions} options options object
 * @return {string}
 */
export const getHobby = (options?: ItemOptions) => getItem(HOBBIES, options);

/**
 * getHobbies - generate array of hobbies
 * @param {ItemsOptions} options options object
 * @return {string[]}
 */
export const getHobbies = (options?: ItemsOptions) => {
  const optionsWithShuffle = { ...options, shuffle: true };

  return createGetItems(HOBBIES)(optionsWithShuffle);
};
