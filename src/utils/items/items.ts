import { Item, Items, ItemOptions, ItemsOptions } from '../../types';

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
export const getItem = (items: Items, options?: ItemOptions): Item => getItems(items, options)[0];

/**
 * getItems - Get, filter and return array of items
 * @param {ItemsOptions} options options object
 * @return {Items}
 */
export const getItems = (items: Items, options?: ItemsOptions): Items => {
  const { includes, length, unique, sort, startsWith } = { ...defaultOptions, ...options };

  let itemsArr = [...items];

  if (startsWith) {
    itemsArr = itemsArr.filter((item) => item.startsWith(startsWith));
  }

  if (includes) {
    itemsArr = itemsArr.filter((item) => item.includes(includes));
  }

  if (unique) {
    itemsArr = [...new Set(itemsArr)];
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
 * createGetItems - function to generate array of items with options
 * @param {ItemsOptions} options options object
 * @return {Items}
 */
export const createGetItems =
  (items: Items) =>
  (options?: ItemsOptions): Items =>
    getItems(items, options);
