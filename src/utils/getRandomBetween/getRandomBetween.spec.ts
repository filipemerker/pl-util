import { getRandomBetween } from './getRandomBetween';

describe('test getRandomBetween.ts', () => {
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
