import { getRandomBetween } from './utils';

const A_CHAR_CODE = 65;
const Z_CHAR_CODE = 90;

export const getStreetNumber = () => {
  const streetNumber = getRandomBetween(0, 300);
  const numberWithLetter = getRandomBetween(0, 2);
  const streetNumberLetter =
    numberWithLetter === 2 // to have 33,33% chance to have number with letter
      ? String.fromCharCode(getRandomBetween(A_CHAR_CODE, Z_CHAR_CODE))
      : '';

  return `${streetNumber} ${streetNumberLetter}`.trim();
};
