type Listing = {
  id: number;
  latest_price_eur: number;
  building_type: string;
  surface_area_m2: number;
  bedrooms_count: number;
  postal_address: {
    city: string;
    country: string;
    postal_code: string;
    street_address: string;
  };
  updated_date: string;
  description: string; // All listing return empty string for description
  ref?: string; // No listing has ref property, so it is listed as optional, for future use
};

type PostListing = Omit<Listing, 'id' | 'updated_date'> & {
  name: string;
  rooms_count: number;
  contact_phone_number: string;
};

export type { Listing, PostListing };
