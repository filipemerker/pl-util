import { getApartmentNumber } from './apartmentNumber';

export const checkApartmentNumber = (apartmentNumber: string) => /^\d+$/.test(apartmentNumber);

describe('test apartmentNumber.ts', () => {
  it('should return string value and should contains number', () => {
    const apartmentNumber = getApartmentNumber();

    expect(typeof apartmentNumber).toBe('string');
    expect(checkApartmentNumber(apartmentNumber)).toBeTruthy();
  });

  it('should return random apartment numbers', () => {
    const apartmentNumbers = [...new Array(10)].map(getApartmentNumber);
    const apartmentNumbersWithoutDuplications = [...new Set(apartmentNumbers)];

    expect(apartmentNumbersWithoutDuplications.length).toBeGreaterThan(1);
  });
});
