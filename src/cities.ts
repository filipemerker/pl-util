import { randomNumber, randomNumbers, randomUniqueNumbers } from './utils/random';

import CITIES from './data/cities.json';

export function getCity() {
  const cityMaxIndex = CITIES.length - 1;

  return CITIES[randomNumber(0, cityMaxIndex)];
}

export function getCities({ length = 10, unique = true, sort = false, startsWith = '' }) {
  let citiesId = [];
  const cities = startsWith === '' ? CITIES : CITIES.filter((city) => city.startsWith(startsWith));

  if (unique) {
    const updatedLength = length > cities.length ? cities.length : length;

    citiesId = randomUniqueNumbers(0, cities.length - 1, updatedLength);
  } else {
    citiesId = randomNumbers(0, cities.length - 1, length);
  }

  if (sort) {
    return citiesId.map((id) => cities[id]).sort();
  }

  return citiesId.map((id) => cities[id]);
}
