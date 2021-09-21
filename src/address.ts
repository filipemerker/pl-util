import { getStreet, getStreetNumber, getApartmentNumber, getZipCode, getCity } from './index';

export const getAddress = () => {
  const street = getStreet();
  const streetNumber = getStreetNumber();
  const apartmentNumber = getApartmentNumber();
  const streetWithDetails = `ul. ${street} ${streetNumber} / ${apartmentNumber}`;

  const zipCode = getZipCode();
  const city = getCity();
  const zipCodeWithCity = `${zipCode} ${city}`;

  return `${streetWithDetails}\n${zipCodeWithCity}`;
};
