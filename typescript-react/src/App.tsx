import Header from '@components/Header/Header';
import Listings from '@containers/Listings/Listings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PricesHistory from '@containers/PricesHistory';

const queryClient = new QueryClient();

const App = () => (
  <>
    <Header />
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listings />} />
          <Route path="/:listingId/prices" element={<PricesHistory />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </>
);

export default App;
