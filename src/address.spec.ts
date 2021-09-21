import { getAddress } from './address';

describe('test adress.ts', () => {
  it('should be string and return value', () => {
    const address = getAddress();
    expect(typeof address).toBe('string');
    expect(address.length).toBeGreaterThan(0);
    expect(address.indexOf('\n')).toBeGreaterThan(1);
  });
});
