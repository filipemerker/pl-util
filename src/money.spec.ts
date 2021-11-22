import { getMoney } from './money';

describe('test money.ts', () => {
  it('should return value with money currency (PLN)', () => {
    const money = getMoney();
    const [, currency] = money.split(' ');

    expect(currency).toBe('PLN');
  });

  it('should return value with money currency (zł)', () => {
    const money = getMoney('zł');
    const [, currency] = money.split(' ');

    expect(currency).toBe('zł');
  });

  it('should return float and positive value', () => {
    const money = getMoney();
    const [value] = money.split(' ');
    const valueAsNumber = Number(value);

    expect(Number.isNaN(valueAsNumber)).toBeFalsy();
    expect(valueAsNumber % 1 !== 0).toBeTruthy();
    expect(valueAsNumber >= 0).toBeTruthy();
  });
});
