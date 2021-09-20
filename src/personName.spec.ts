import { getPersonName } from './personName';

import FEMALE_NAMES from './data/femaleNames.json';
import MALE_NAMES from './data/maleNames.json';

describe('test personName.ts', () => {
  let personName: string;

  beforeEach(() => {
    personName = getPersonName();
  });

  it('should return string and value', () => {
    expect(typeof personName).toBe('string');
    expect(personName.length).toBeGreaterThan(1);
  });

  it('should return proper man name', () => {
    expect(MALE_NAMES.indexOf(personName)).toBeGreaterThan(-1);

    // test with attribute
    personName = getPersonName('man');
    expect(MALE_NAMES.indexOf(personName)).toBeGreaterThan(-1);
  });

  it('should return proper man name', () => {
    // test with attribute
    personName = getPersonName('woman');
    expect(FEMALE_NAMES.indexOf(personName)).toBeGreaterThan(-1);
  });
});
