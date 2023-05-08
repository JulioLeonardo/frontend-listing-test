import ListingForm from '.';

import { renderWithClient } from '@/testUtils';

describe('<ListingForm />', () => {
  it('Should render the listing form component', () => {
    renderWithClient(<ListingForm />);
  });
});
