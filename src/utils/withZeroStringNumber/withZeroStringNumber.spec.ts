import { withZeroStringNumber } from './withZeroStringNumber';

describe('test withZeroStringNumber.ts', () => {
  it('should return same value when same length (2 numbers)', () => {
    expect(withZeroStringNumber(() => 12)(2)).toBe('12');
  });

  it('should return same value when same length (4 numbers)', () => {
    expect(withZeroStringNumber(() => 4234)(4)).toBe('4234');
  });

  it('should add zero when length of number are less than set length (2 numbers)', () => {
    expect(withZeroStringNumber(() => 1)(2)).toBe('01');
  });

  it('should add zero when length of number are less than set length (2 numbers)', () => {
    expect(withZeroStringNumber(() => 11)(5)).toBe('00011');
  });
});
