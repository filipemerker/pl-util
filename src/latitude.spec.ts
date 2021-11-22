import { getLatitude, MIN_LATITUDE, MAX_LATITUDE } from './latitude';

describe('test latitude.ts', () => {
  let latitude: number;

  beforeEach(() => {
    latitude = getLatitude();
  });

  it('latitude should return number value', () => {
    expect(typeof latitude).toBe('number');
  });

  it(`should latitude be beetween ${MIN_LATITUDE} and ${MAX_LATITUDE}`, () => {
    expect(latitude).toBeGreaterThanOrEqual(MIN_LATITUDE);
    expect(latitude).toBeLessThanOrEqual(MAX_LATITUDE);
  });
});
