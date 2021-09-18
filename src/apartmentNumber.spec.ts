import { getApartmentNumber } from './apartmentNumber';

describe('test apartmentNumber.ts', () => {
  it('should return string value and should contains number', () => {
    const apartmentNumber = getApartmentNumber();

    expect(typeof apartmentNumber).toBe('string');
    expect(/^\d+$/.test(apartmentNumber)).toBeTruthy();
  });

  it('should return random apartment numbers', () => {
    const apartmentNumbers = [...new Array(10)].map(getApartmentNumber);
    const apartmentNumbersWithoutDulications = [...new Set(apartmentNumbers)];

    expect(apartmentNumbersWithoutDulications.length).toBeGreaterThan(1);
  });
});
