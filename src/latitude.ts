import { getFloatRandomBetween } from './utils';

export const MIN_LATITUDE = 51.0465386825791;
export const MAX_LATITUDE = 53.9027815534016;

export const getLatitude = () => {
  const latitude = getFloatRandomBetween(MIN_LATITUDE, MAX_LATITUDE);
  return Number(latitude.toFixed(13));
};
