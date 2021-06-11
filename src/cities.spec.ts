import { getCity, getCities } from './cities';

import CITIES from './data/cities.json';

describe('test cities.js', () => {
  const allCities = [...CITIES];

  describe('test getCity', () => {
    test('should getCity return string name and city from list', () => {
      const ranomCity = getCity();

      expect(typeof ranomCity).toBe('string');
      expect(allCities.indexOf(ranomCity)).toBeGreaterThan(-1);
    });
  });

  describe('test getCities', () => {
    test('should return proper cities length and proper names', () => {
      const cities = getCities({ length: 4, startsWith: 'B' });

      expect(Array.isArray(cities)).toBeTruthy();
      expect(cities.length).toBe(4);
      cities.forEach((city) => {
        expect(allCities.indexOf(city)).toBeGreaterThan(-1);
      });
    });
  });
});
