import { Items, ItemOptions, ItemsOptions } from '../../types';

const defaultOptions = {
  includes: '',
  length: 10,
  unique: false,
  startsWith: '',
};

export const getItem = (items: Items, options?: ItemOptions) => getItems(items, options)[0];

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

export const createGetItems = (items: Items) => (options?: ItemsOptions) =>
  getItems(items, options);
