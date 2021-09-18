import { getStreetNumber } from './streetNumber';

describe('test streetNumber.ts', () => {
  it('should return string value and should contains number', () => {
    const streetNumber = getStreetNumber();

    expect(typeof streetNumber).toBe('string');
    expect(/\d/.test(streetNumber)).toBeTruthy();
  });

  it('should return random street numbers', () => {
    const streetNumbers = [...new Array(10)].map(getStreetNumber);
    const streetNumbersWithoutDulications = [...new Set(streetNumbers)];

    expect(streetNumbersWithoutDulications.length).toBeGreaterThan(1);
  });
});
