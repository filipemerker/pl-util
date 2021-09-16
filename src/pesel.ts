import { Pesel } from './types';
import { getRandomBetween } from './utils/random';

const withZeroStringNumber =
  (func: () => number) =>
  (length = 2) => {
    const funcRes = func();

    if (funcRes.toString().length < length) {
      return new Array(length - funcRes.toString().length + 1).join('0') + funcRes.toString();
    }

    return funcRes.toString();
  };

export const getPesel = (): Pesel => {
  const year = withZeroStringNumber(() => getRandomBetween(1, 9))();
  const month = withZeroStringNumber(() => getRandomBetween(1, 72))();
  const day = withZeroStringNumber(() => getRandomBetween(1, 31))();
  const pppp = String(getRandomBetween(1000, 9999));
  const k = String(getRandomBetween(1, 9));
  return year + month + day + pppp + k;
};
