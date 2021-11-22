import { getStreetNumber } from './streetNumber';

export const checkStreetNumberFormat = (streetNumber: string) => /\d/.test(streetNumber);

describe('test streetNumber.ts', () => {
  it('should return string value and should contains number', () => {
    const streetNumber = getStreetNumber();

    expect(typeof streetNumber).toBe('string');
    expect(checkStreetNumberFormat(streetNumber)).toBeTruthy();
  });

  it('should return random street numbers', () => {
    const streetNumbers = [...new Array(10)].map(getStreetNumber);
    const streetNumbersWithoutDuplications = [...new Set(streetNumbers)];

    expect(streetNumbersWithoutDuplications.length).toBeGreaterThan(1);
  });
});
