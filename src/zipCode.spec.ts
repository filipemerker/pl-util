import { getZipCode } from './zipCode';

export const checkZipCodeFormat = (zipCode: string) => /^\d{2}-\d{3}$/.test(zipCode);

describe('test zipCode.ts', () => {
  let zipCode: string;

  beforeEach(() => {
    zipCode = getZipCode();
  });

  it('should return string wit proper length', () => {
    expect(typeof zipCode).toBe('string');
    expect(zipCode.length).toBe(6);
  });

  it('shold have proper format dd-ddd', () => {
    expect(checkZipCodeFormat(zipCode)).toBeTruthy();
  });

  it('should return random zip codes', () => {
    const zipCodes = [...new Array(10)].map(getZipCode);
    const zipCodesWithoutDuplications = [...new Set(zipCodes)];

    expect(zipCodesWithoutDuplications.length).toBeGreaterThan(1);
  });
});
