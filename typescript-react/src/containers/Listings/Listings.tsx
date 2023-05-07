import ListingCard from '@components/ListingCard';
import ListingForm from '@components/ListingForm';

import styles from './listings.module.scss';
import { useQuery } from '@tanstack/react-query';

const Listings = () => {
  const { data, status } = useQuery(['listings'], () =>
    fetch('http://localhost:8080/listings').then((res) => res.json()),
  );

  console.log({ data, status });

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
          <ListingCard />
        </section>
      </div>
    </main>
  );
};

export default Listings;
