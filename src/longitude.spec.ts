import { getLongitude, MIN_LONGITUDE, MAX_LONGITUDE } from './longitude';

describe('test longitude.ts', () => {
  let longitude: number;

  beforeEach(() => {
    longitude = getLongitude();
  });

  it('longitude should return number value', () => {
    expect(typeof longitude).toBe('number');
  });

  it(`should longitude be beetween ${MIN_LONGITUDE} and ${MAX_LONGITUDE}`, () => {
    expect(longitude).toBeGreaterThanOrEqual(MIN_LONGITUDE);
    expect(longitude).toBeLessThanOrEqual(MAX_LONGITUDE);
  });
});
