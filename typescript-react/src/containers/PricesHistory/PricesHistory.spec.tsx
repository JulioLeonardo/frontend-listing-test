import PricesHistory from './PricesHistory';
import { renderWithClient } from '@/testUtils';

describe('<PricesHistory /> test suite', () => {
  it('Should render the <PricesHistory /> component', () => {
    renderWithClient(<PricesHistory />);
  });
});
