import Header from '@components/Header/Header';
import Listings from '@containers/Listings/Listings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => (
  <>
    <Header />
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listings />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </>
);

export default App;
