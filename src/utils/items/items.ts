import { Item, Items, ItemOptions, ItemsOptions } from '../../types';
import { getRandomBetween } from '../';
import { shuffleArray } from '../shuffle';

const defaultOptions = {
  includes: '',
  length: 10,
  unique: false,
  startsWith: '',
};

/**
 * getItem - Get item element
 * @param {ItemOptions} options options object
 * @return {Item}
 */
export const getItem = (items: Items, options?: ItemOptions): Item => {
  const parsedItems = getSelectedItems(items, options);
  const random = getRandomBetween(0, parsedItems.length - 1);

  return items[random];
};

/**
 * getSelectedItems - Get, filter and return array of items
 * @param {ItemsOptions} options options object
 * @return {Items}
 */
export const getSelectedItems = (items: Items, options?: ItemsOptions): Items => {
  const {
    includes,
    length,
    unique,
    sort,
    startsWith,
    shuffle = false,
  } = { ...defaultOptions, ...options };

  let itemsArr = [...items];

  if (startsWith || includes) {
    itemsArr = itemsArr.filter((item) => {
      const isStartsWith = startsWith ? item.startsWith(startsWith) : true;
      const isIncludes = includes ? item.includes(includes) : true;

      return isStartsWith && isIncludes;
    });
  }

  if (unique) {
    itemsArr = [...new Set(itemsArr)];
  }

  if (shuffle) {
    itemsArr = shuffleArray(itemsArr);
  }

  if (length && length > 0 && typeof length === 'number' && Number.isInteger(length)) {
    itemsArr = itemsArr.slice(0, length);
  }

  if (sort === 'asc') {
    itemsArr = itemsArr.sort();
  }

  if (sort === 'desc') {
    itemsArr = itemsArr.sort((a, b) => (a > b ? -1 : 1));
  }

  return itemsArr;
};

/**
 * getItems - function to generate array of items with options
 * @param {ItemsOptions} options options object
 * @return {Items}
 */
export const getItems =
  (items: Items) =>
  (options?: ItemsOptions): Items =>
    getSelectedItems(items, options);
