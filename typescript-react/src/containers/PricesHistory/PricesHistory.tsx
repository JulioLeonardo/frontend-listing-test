import PricesHistoryCard from '@components/PriceHistoryCard';

import styles from './prices-history.module.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const fetchListingPrices = (
  listingId?: string,
): Promise<{ created_date: string; price_eur: number }[]> => {
  if (!listingId) return Promise.resolve([]);

  return axios
    .get(`http://localhost:8080/listings/${listingId}/prices`)
    .then((res) => res.data);
};

const PricesHistory = () => {
  const { listingId } = useParams();
  const { data, status } = useQuery({
    queryKey: ['listingsPrices'],
    queryFn: () => fetchListingPrices(listingId),
  });

  console.log(data, status);

  return (
    <div className={styles['container']}>
      <h1>Prices History</h1>
      <PricesHistoryCard />

      <a href="/" className={styles['link']}>
        &larr; Back Home
      </a>
    </div>
  );
};
export default PricesHistory;
