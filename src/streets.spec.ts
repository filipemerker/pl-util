import { getStreet, getStreets } from './streets';
import STREETS from './data/streets.json';

describe('test streets.ts', () => {
  describe('test getStreet function', () => {
    let street = '';

    beforeEach(() => {
      street = getStreet();
    });

    it('should return not empty string', () => {
      expect(typeof street === 'string').toBeTruthy();
      expect(street.trim().length).toBeGreaterThan(0);
    });

    it('should return street from streets list', () => {
      expect(STREETS.indexOf(street) >= 0).toBeTruthy();
    });

    it('should options works when are passed', () => {
      street = getStreet({ startsWith: 'W' });

      expect(street[0] === 'W');
    });
  });

  describe('test getStreets function', () => {
    let streets: string[] = [];

    beforeEach(() => {
      streets = getStreets();
    });

    it('should return array of strings values', () => {
      expect(streets.every((street) => typeof street === 'string')).toBeTruthy();
      expect(streets.length).toBeGreaterThan(0);
    });

    it('should return array of random streets', () => {
      const arr = [...new Array(8)].map(() => getStreets());
      arr.forEach((streets, index) => expect(streets).not.toEqual(arr[index + 1]));
    });

    it('should return streets from streets list', () => {
      expect(streets.every((street) => STREETS.indexOf(street) >= 0)).toBeTruthy();
    });

    it('should options works when are passed', () => {
      streets = getStreets({ startsWith: 'W', length: 3, sort: 'desc', unique: true });

      expect(streets.every((street) => street[0] === 'W')).toBeTruthy(); // startsWith
      expect(streets.length).toBe(3); // length
      expect([...streets].sort().reverse()).toEqual(streets); // sort
      expect([...new Set(streets)].length).toBe(3); // unique
    });
  });
});
