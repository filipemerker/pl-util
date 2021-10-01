import { getRandomBetween, withZeroStringNumber } from './utils';

export const getBankNumber = () => {
  const nn = withZeroStringNumber(() => getRandomBetween(0, 99))();
  const nnnn1 = withZeroStringNumber(() => getRandomBetween(0, 9999))(4);
  const nnnn2 = withZeroStringNumber(() => getRandomBetween(0, 9999))(4);
  const nnnn3 = withZeroStringNumber(() => getRandomBetween(0, 9999))(4);
  const nnnn4 = withZeroStringNumber(() => getRandomBetween(0, 9999))(4);
  const nnnn5 = withZeroStringNumber(() => getRandomBetween(0, 9999))(4);
  const nnnn6 = withZeroStringNumber(() => getRandomBetween(0, 9999))(4);

  return `PL${nn} ${nnnn1} ${nnnn2} ${nnnn3} ${nnnn4} ${nnnn5} ${nnnn6}`;
};
