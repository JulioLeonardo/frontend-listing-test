import ListingCard from '@components/ListingCard';
import ListingForm from '@components/ListingForm';
import { StatusHandler } from '@components/StatusHandler';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import styles from './listings.module.scss';

import { Listing } from '@/types';

const fetchListings = (): Promise<Listing[]> =>
  axios.get('http://localhost:8080/listings').then((response) => response.data);

const Listings = () => {
  const { data, status } = useQuery({
    queryKey: ['listings'],
    queryFn: fetchListings,
  });

  return (
    <main className={styles['listings']}>
      <h1 className={styles['listings__title']}>Main Listings page</h1>
      <div className={styles['listings__wrapper']}>
        <aside className={styles['listings__aside']}>
          <h2 className={styles['listings__sub-title']}>Add a listing</h2>
          <ListingForm />
        </aside>
        <section className={styles['listings__section']}>
          <h2 className={styles['listings__sub-title']}>Listings</h2>
          {data ? (
            data.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))
          ) : (
            <StatusHandler status={status} />
          )}
        </section>
      </div>
    </main>
  );
};

export default Listings;
