export function randomNumber(min = 0, max = 10) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomNumbers(min = 0, max = 10, arrayLength = 2) {
  return [...Array(arrayLength)].map(() => randomNumber(min, max));
}

export function randomUniqueNumbers(min = 0, max = 10, count = 10) {
  if (count > max - min + 1) {
    throw new Error(`Wrong count number (max count: ${max - min})`);
  }

  const nums = new Set();
  while (nums.size < count) {
    nums.add(randomNumber(min, max));
  }
  return [...nums] as number[];
}
