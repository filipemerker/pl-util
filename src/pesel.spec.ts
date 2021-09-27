import { getPesel } from './pesel';
import { Pesel } from './types';

describe('test pesel.ts', () => {
  let pesel: Pesel;

  beforeEach(() => {
    pesel = getPesel();
  });

  it('should be string and have 11 digits', () => {
    expect(typeof pesel).toBe('string');
    expect(pesel.trim().length).toBe(11);
  });

  it('should return only digits', () => {
    expect(/^\d+$/.test(pesel)).toBeTruthy();
  });

  it('should return random pesels', () => {
    const pesels = [...new Array(10)].map(getPesel);
    const peselsWithoutDuplications = [...new Set(pesels)];

    expect(peselsWithoutDuplications.length).toBeGreaterThan(1);
  });
});
