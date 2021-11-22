import { getRandomBetween } from './utils';
import { Gender } from './types';

import FEMALE_NAMES from './data/femaleNames.json';
import FEMALE_SURNAMES from './data/femaleSurnames.json';
import MALE_NAMES from './data/maleNames.json';
import MALE_SURNAMES from './data/maleSurnames.json';

const getName = <T>(items: T[]) => {
  const genderNamesLength = items.length;
  const genderNameRandomIndex = getRandomBetween(0, genderNamesLength);

  return items[genderNameRandomIndex];
};

export const getPersonName = (gender: Gender = 'man') => {
  const isMan = gender === 'man';
  const items = isMan ? MALE_NAMES : FEMALE_NAMES;

  return getName(items);
};

export const getPersonSurname = (gender: Gender = 'man') => {
  const isMan = gender === 'man';
  const items = isMan ? MALE_SURNAMES : FEMALE_SURNAMES;

  return getName(items);
};

export const getPersonFullName = (gender: Gender = 'man') => {
  const isMan = gender === 'man';
  const names = isMan ? MALE_NAMES : FEMALE_NAMES;
  const name = getName(names);

  const surnames = isMan ? MALE_SURNAMES : FEMALE_SURNAMES;
  const surname = getName(surnames);

  return `${name} ${surname}`;
};
