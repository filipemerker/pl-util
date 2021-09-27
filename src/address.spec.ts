import { getAddress } from './address';
import { checkZipCodeFormat } from './zipCode.spec';

import CITIES from './data/cities.json';

describe('test adress.ts', () => {
  let address: string;

  beforeEach(() => {
    address = getAddress();
  });

  it('should return value', () => {
    expect(address.trim().length).toBeGreaterThan(1);
  });

  it('should return address in two lines of code', () => {
    expect(address.split('\n').length).toBe(2);
  });

  it('should have proper format in first address line', () => {
    const [streetAndNumberName] = address.split('\n');

    expect(streetAndNumberName.indexOf('ul. ')).toBe(0);
  });

  it('should have proper format in second address line (zip code and city)', () => {
    const [, lineZipAndCity] = address.split('\n');
    const [zipCode, city] = lineZipAndCity.split(' ');

    expect(checkZipCodeFormat(zipCode)).toBeTruthy();
    expect(CITIES.indexOf(city)).toBeGreaterThanOrEqual(0);
  });
});
