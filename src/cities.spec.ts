import { getCity, getCities } from './cities';
import CITIES from './data/cities.json';

describe('test cities.ts', () => {
  describe('test getCity function', () => {
    let city = '';

    beforeEach(() => {
      city = getCity();
    });

    it('should return not empty string', () => {
      expect(typeof city === 'string').toBeTruthy();
      expect(city.length).toBeGreaterThan(0);
    });

    it('should return city from cities list', () => {
      expect(CITIES.indexOf(city) >= 0).toBeTruthy();
    });

    it('should options works when are passed', () => {
      city = getCity({ startsWith: 'W' });

      expect(city[0] === 'W');
    });
  });

  describe('test getCities function', () => {
    let cities: string[] = [];

    beforeEach(() => {
      cities = getCities();
    });

    it('should return array of strings values', () => {
      expect(cities.every((city) => typeof city === 'string')).toBeTruthy();
      expect(cities.length).toBeGreaterThan(0);
    });

    it('should return array of random cities', () => {
      const arr = [...new Array(8)].map(() => getCities());
      arr.forEach((cities, index) => expect(cities).not.toEqual(arr[index + 1]));
    });

    it('should return cities from cities list', () => {
      expect(cities.every((city) => CITIES.indexOf(city) >= 0)).toBeTruthy();
    });

    it('should options works when are passed', () => {
      cities = getCities({ startsWith: 'W', length: 3, sort: 'desc', unique: true });

      expect(cities.every((city) => city[0] === 'W')).toBeTruthy(); // startsWith
      expect(cities.length).toBe(3); // length
      expect([...cities].sort().reverse()).toEqual(cities); // sort
      expect([...new Set(cities)].length).toBe(3); // unique
    });
  });
});
