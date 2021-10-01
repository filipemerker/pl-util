import { getBankNumber } from './bankNumber';

describe('test bankNumber.ts', () => {
  let bankNumber: string;

  beforeEach(() => {
    bankNumber = getBankNumber();
  });

  it('bank number should return 34 digits string', () => {
    expect(typeof bankNumber).toBe('string');
    expect(bankNumber).toHaveLength(34);
  });

  it('bank number should starts with PL', () => {
    expect(bankNumber.startsWith('PL')).toBeTruthy();
  });

  it('bank number should hape proper shape PLNN NNNN NNNN NNNN NNNN NNNN NNNN (N - number)', () => {
    expect(/^PL\d{2} \d{4} \d{4} \d{4} \d{4} \d{4} \d{4}$/.test(bankNumber)).toBeTruthy();
  });
});
