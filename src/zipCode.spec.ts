import { getZipCode } from './zipCode';

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
    expect(/^\d{2}-\d{3}$/.test(zipCode)).toBeTruthy();
  });

  it('should return random zip codes', () => {
    const zipCodes = [...new Array(10)].map(getZipCode);
    const zipCodesWithoutDulications = [...new Set(zipCodes)];

    expect(zipCodesWithoutDulications.length).toBeGreaterThan(1);
  });
});
