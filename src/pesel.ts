import { Pesel } from './types';
import { getRandomBetween, withZeroStringNumber } from './utils';

/**
 * getPesel - generate one random pesel number
 * @return {Pesel} pesel number
 */
export const getPesel = (): Pesel => {
  const year = withZeroStringNumber(() => getRandomBetween(1, 9))();
  const month = withZeroStringNumber(() => getRandomBetween(1, 72))();
  const day = withZeroStringNumber(() => getRandomBetween(1, 31))();
  const pppp = String(getRandomBetween(1000, 9999));
  const k = String(getRandomBetween(1, 9));

  return year + month + day + pppp + k;
};
