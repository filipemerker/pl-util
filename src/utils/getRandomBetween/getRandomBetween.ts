export const getRandomBetween = (min: number, max: number): number =>
  Math.round(Math.random() * (max - min) + min);

export const getFloatRandomBetween = (min: number, max: number) =>
  Math.random() * (max - min) + min;
