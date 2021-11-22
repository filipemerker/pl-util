import { getFloatRandomBetween } from './utils';
import { Currency } from './types';

export const getMoney = (currency: Currency = 'PLN', min = 0, max = 100) => {
  const number = getFloatRandomBetween(min, max).toFixed(2);

  return `${number} ${currency}`;
};
