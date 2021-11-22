import { getHobby, getHobbies } from './hobbies';
import HOBBIES from './data/hobby.json';

describe('test hobbies.ts', () => {
  describe('test getHobby function', () => {
    let hobby = '';

    beforeEach(() => {
      hobby = getHobby();
    });

    it('should return not empty string', () => {
      expect(typeof hobby === 'string').toBeTruthy();
      expect(hobby.length).toBeGreaterThan(0);
    });

    it('should return hobby from hobbies list', () => {
      expect(HOBBIES.indexOf(hobby) >= 0).toBeTruthy();
    });

    it('should options works when are passed', () => {
      hobby = getHobby({ startsWith: 'A' });

      expect(hobby[0] === 'A');
    });
  });

  describe('test getHobbies function', () => {
    let hobbies: string[] = [];

    beforeEach(() => {
      hobbies = getHobbies();
    });

    it('should return array of strings values', () => {
      expect(hobbies.every((hobby) => typeof hobby === 'string')).toBeTruthy();
      expect(hobbies.length).toBeGreaterThan(0);
    });

    it('should return array of random hobbies', () => {
      const arr = [...new Array(8)].map(() => getHobbies());
      arr.forEach((hobbies, index) => expect(hobbies).not.toEqual(arr[index + 1]));
    });

    it('should return hobbies from hobbies list', () => {
      expect(hobbies.every((hobby) => hobbies.indexOf(hobby) >= 0)).toBeTruthy();
    });

    it('should options works when are passed', () => {
      hobbies = getHobbies({
        startsWith: 'A',
        length: 1,
        sort: 'desc',
        unique: true,
      });

      expect(hobbies.every((hobby) => hobby[0] === 'A')).toBeTruthy(); // startsWith
      expect(hobbies.length).toBe(1); // length
      expect([...hobbies].sort().reverse()).toEqual(hobbies); // sort
      expect([...new Set(hobbies)].length).toBe(1); // unique
    });
  });
});
