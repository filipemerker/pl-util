import { getRandomBetween, withZeroStringNumber } from './utils';

export const getZipCode = () => {
  const dd = withZeroStringNumber(() => getRandomBetween(0, 99))();
  const ddd = withZeroStringNumber(() => getRandomBetween(0, 999))(3);

  return `${dd}-${ddd}`;
};
