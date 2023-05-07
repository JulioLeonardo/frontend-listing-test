import { render } from '@testing-library/react';

import ListingCard from './ListingCard';

const listing = {
  bedrooms_count: 2,
  building_type: 'STUDIO',
  contact_phone_number: '+219779210354',
  created_date: '2023-01-17T14:19:22.808738',
  description: '',
  id: 1,
  latest_price_eur: 710000.0,
  name: 'Mikhail Schmiedt',
  postal_address: {
    city: 'Berchtesgaden',
    country: 'DE',
    postal_code: '21810',
    street_address: 'Johan-Ernst-Ring 7',
  },
  rooms_count: 6,
  surface_area_m2: 167.0,
  updated_date: '2023-01-17T14:20:47.707666',
};

describe('<ListingCard /> test suite', () => {
  it('Should render the <ListingCard /> component', () => {
    render(<ListingCard listing={listing} />);
  });
});
