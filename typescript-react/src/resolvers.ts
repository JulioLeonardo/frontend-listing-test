import { Listing } from '@/types';

export const convertNumberToCurrency = (value: number) => {
  return value.toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

export const capitalizeFirstLetter = (str: string) => {
  const lower = str.toLowerCase();
  return `${lower.charAt(0).toUpperCase()}${lower.slice(1)}`;
};

export const resolveAddressString = (
  address: Pick<Listing, 'postal_address'>,
) => {
  return `${address.postal_address.street_address}, ${address.postal_address.postal_code}, ${address.postal_address.city}`;
};

export const resolveDateString = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
};
