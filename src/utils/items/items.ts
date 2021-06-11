import { Items, Options } from '../../types';

const defaultOptions = {
  includes: '',
  length: 10,
  unique: false,
  startsWith: '',
};

const mergedOptions = (options?: Options) => Object.assign(defaultOptions, options);

export const getItem = (items: Items, options?: Options) => getItems(items, options)[0];

export const getItems = (items: Items, options: Options = defaultOptions): Items => {
  const { includes, length, unique, sort, startsWith } = mergedOptions(options);

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

export const createGetItems = (items: Items) => (options?: Options) => getItems(items, options);
