import { getFloatRandomBetween, getRandomBetween } from './getRandomBetween';

describe('test getRandomBetween', () => {
  it('should return value from proper range', () => {
    const MIN = 1;
    const MAX = 7;
    const numbers = [...new Array(20)].map(() => getRandomBetween(MIN, MAX));

    numbers.forEach((number) => expect(number >= MIN && number <= MAX).toBeTruthy());
  });

  it('should return random numbers', () => {
    const numbers = [...new Array(8)].map(() => getRandomBetween(1, 100));
    numbers.forEach((nbrs, index) => expect(nbrs).not.toEqual(numbers[index + 1]));
  });
});

describe('test getFloatRandomBetween', () => {
  it('should return value from proper range', () => {
    const MIN = 1;
    const MAX = 7;
    const value = getRandomBetween(MIN, MAX);

    expect(value >= MIN && value <= MAX);
  });

  it('should return float number', () => {
    const value = getFloatRandomBetween(1, 20);

    expect(Number.isNaN(value)).toBeFalsy();
    expect(value % 1 !== 0).toBeTruthy();
  });
});
