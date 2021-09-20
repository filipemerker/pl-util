import { getRandomBetween } from './utils';
import { Gender } from './types';

import FEMALE_NAMES from './data/femaleNames.json';
import MALE_NAMES from './data/maleNames.json';

export const getPersonName = (gender: Gender = 'man') => {
  const isMan = gender === 'man';
  const genderNamesLength = isMan ? MALE_NAMES.length : FEMALE_NAMES.length;
  const genderNameRandomIndex = getRandomBetween(0, genderNamesLength);

  return isMan ? MALE_NAMES[genderNameRandomIndex] : FEMALE_NAMES[genderNameRandomIndex];
};
