import Listings from './Listings';
import { renderWithClient } from '@/testUtils';

describe('<Listings /> test suite', () => {
  it('Should render the <Listings /> component', () => {
    renderWithClient(<Listings />);
  });
});
