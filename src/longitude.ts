import { getFloatRandomBetween } from './utils';

export const MIN_LONGITUDE = 22.765588593803006;
export const MAX_LONGITUDE = 23.45336924573627;

export const getLongitude = () => {
  const longitude = getFloatRandomBetween(MIN_LONGITUDE, MAX_LONGITUDE);
  return Number(longitude.toFixed(13));
};
