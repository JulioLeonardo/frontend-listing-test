import React from 'react';
import Header from '@components/Header/Header';
import Listings from '@containers/Listings/Listings';
import PricesHistory from '@containers/PricesHistory';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <Header />
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listings />} />
          <Route path="/:listingId/prices" element={<PricesHistory />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
