import { getPersonName, getPersonSurname, getPersonFullName } from './personName';

import FEMALE_NAMES from './data/femaleNames.json';
import FEMALE_SURNAMES from './data/femaleSurnames.json';
import MALE_NAMES from './data/maleNames.json';
import MALE_SURNAMES from './data/maleSurnames.json';

// test names
describe('test person name', () => {
  let personName: string;

  beforeEach(() => {
    personName = getPersonName();
  });

  it('should return string and value', () => {
    expect(typeof personName).toBe('string');
    expect(personName.trim().length).toBeGreaterThan(1);
  });

  it('should return proper man name', () => {
    expect(MALE_NAMES.indexOf(personName)).toBeGreaterThan(-1);

    // test with attribute
    personName = getPersonName('man');
    expect(MALE_NAMES.indexOf(personName)).toBeGreaterThan(-1);
  });

  it('should return proper man name', () => {
    personName = getPersonName('woman');
    expect(FEMALE_NAMES.indexOf(personName)).toBeGreaterThan(-1);
  });
});

// test surnames
describe('test person surname', () => {
  let personSurname: string;

  beforeEach(() => {
    personSurname = getPersonSurname();
  });

  it('should return string and value', () => {
    expect(typeof personSurname).toBe('string');
    expect(personSurname.trim().length).toBeGreaterThan(1);
  });

  it('should return proper man surname', () => {
    expect(MALE_SURNAMES.indexOf(personSurname)).toBeGreaterThan(-1);

    // test with attribute
    personSurname = getPersonSurname('man');
    expect(MALE_SURNAMES.indexOf(personSurname)).toBeGreaterThan(-1);
  });

  it('should return proper man surname', () => {
    personSurname = getPersonSurname('woman');
    expect(FEMALE_SURNAMES.indexOf(personSurname)).toBeGreaterThan(-1);
  });
});

// test fullnames
describe('test person fullname', () => {
  let personFullname: string;

  beforeEach(() => {
    personFullname = getPersonFullName();
  });

  it('should return string and value', () => {
    expect(typeof personFullname).toBe('string');
    expect(personFullname.trim().length).toBeGreaterThan(1);
  });

  it('should return proper man fullname', () => {
    const [name, surname] = personFullname.split(' ');
    expect(MALE_NAMES.indexOf(name)).toBeGreaterThan(-1);
    expect(MALE_SURNAMES.indexOf(surname)).toBeGreaterThan(-1);

    // test with attribute
    personFullname = getPersonFullName('man');
    const [name2, surname2] = personFullname.split(' ');
    expect(MALE_NAMES.indexOf(name2)).toBeGreaterThan(-1);
    expect(MALE_SURNAMES.indexOf(surname2)).toBeGreaterThan(-1);
  });

  it('should return proper man fullname', () => {
    personFullname = getPersonFullName('woman');
    const [name, surname] = personFullname.split(' ');
    expect(FEMALE_NAMES.indexOf(name)).toBeGreaterThan(-1);
    expect(FEMALE_SURNAMES.indexOf(surname)).toBeGreaterThan(-1);
  });
});
