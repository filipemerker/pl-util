import { getPesel } from './pesel';
import { Pesel } from './types';

describe('test peles.ts', () => {
  let pesel: Pesel;

  beforeEach(() => {
    pesel = getPesel();
  });

  it('should be string and have 11 digits', () => {
    expect(typeof pesel).toBe('string');
    expect(pesel.toString().length).toBe(11);
  });
});
