import styles from './price-history-card.module.scss';
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
const PriceHistoryCard = () => {
  const { listingId } = useParams();
  const { data, status } = useQuery({
    queryKey: ['listingsPrices'],
    queryFn: () => fetchListingPrices(listingId),
  });

  console.log(data, status);
  return (
    <div className={styles['container']}>
      <table className={styles['price-card']}>
        <tbody>
          <tr className={styles['price-card__header']}>
            <th scope="col">Date</th>
            <th scope="col">Price (eur)</th>
          </tr>
          <tr>
            <td>01/01/2022</td>
            <td>500 000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default PriceHistoryCard;
