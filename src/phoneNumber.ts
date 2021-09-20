import { getRandomBetween, withZeroStringNumber } from './utils';

export const getPhoneNumber = () => {
  const prefix = '+48 ';
  const number = withZeroStringNumber(() => getRandomBetween(0, 999999999))(9);

  return `${prefix}${number}`;
};
