import styles from './price-history-card.module.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { StatusHandler } from '@components/StatusHandler';
import { convertNumberToCurrency, resolveDateString } from '@/resolvers';

const fetchListingPrices = (
  listingId?: string,
): Promise<{ created_date: string; price_eur: number }[]> => {
  if (!listingId) return Promise.resolve([]);

  return axios
    .get(`http://localhost:8080/listings/${listingId}/prices`)
    .then((res) => res.data);
};
const PriceHistoryCard = () => {
  const { listingId } = useParams();
  const { data, status } = useQuery({
    queryKey: ['listingsPrices'],
    queryFn: () => fetchListingPrices(listingId),
  });

  console.log(data, status);
  return (
    <div className={styles['container']}>
      {data ? (
        <table className={styles['price-card']}>
          <tbody>
            <tr className={styles['price-card__header']}>
              <th scope="col">Date</th>
              <th scope="col">Price (eur)</th>
            </tr>
            {data &&
              data.map((price) => (
                <tr key={price.created_date}>
                  <td>{resolveDateString(price.created_date)}</td>
                  <td>{convertNumberToCurrency(price.price_eur)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <StatusHandler status={status} />
      )}
    </div>
  );
};
export default PriceHistoryCard;
