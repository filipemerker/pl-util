import { getPhoneNumber } from './phoneNumber';

describe('test phoneNumber.ts', () => {
  let phoneNumber: string;

  beforeEach(() => {
    phoneNumber = getPhoneNumber();
  });

  it('phone number should return string value and have 13 characters (+,prefix,space,number)', () => {
    expect(typeof phoneNumber).toBe('string');
    expect(phoneNumber.length).toBe(13);
  });

  it('phone number should have polish prefix', () => {
    expect(phoneNumber.slice(0, 3)).toBe('+48');
  });

  it('phone number should have proper format +48 XXXXXXXXX', () => {
    expect(/^\+48 \d{9}$/.test(phoneNumber)).toBeTruthy();
  });

  it('phone number function should generate random numbers', () => {
    const phoneNumbersArr = [...new Array(10)].map(getPhoneNumber);
    const phoneNumbersArrWithoutDulications = [...new Set(phoneNumbersArr)];

    expect(phoneNumbersArrWithoutDulications.length).toBeGreaterThan(1);
  });
});
