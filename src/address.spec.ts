import { getAddress } from './address';

jest.mock('./utils/random/random.ts', () => ({
  getRandomBetween: () => 1,
}));

describe('test adress.ts', () => {
  let address: string;

  beforeEach(() => {
    address = getAddress();
  });

  it('should return value', () => {
    expect(address.trim().length).toBeGreaterThan(1);
  });

  it('should return address in two lines of code', () => {
    expect(address.split('\n').length).toBe(2);
  });

  it('should have proper format in first address line', () => {
    const [streetAndNumberName] = address.split('\n');

    expect(streetAndNumberName.indexOf('ul. ')).toBe(0);
  });

  it('should match address snapshot', () => {
    address = getAddress();

    expect(address).toMatchInlineSnapshot(`
      "ul. \\"Solidarności\\" 1 / 1
      01-001 Aleksandrów Łódzki"
    `);
  });
});
