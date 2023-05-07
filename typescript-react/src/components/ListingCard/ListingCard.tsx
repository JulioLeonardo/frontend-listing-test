import styles from './listing-card.module.scss';
import { Listing } from '@/types';
import {
  capitalizeFirstLetter,
  convertNumberToCurrency,
  resolveAddressString,
  resolveDateString,
} from '@/resolvers';

const ListingCard = ({ listing }: { listing: Listing }) => {
  return (
    <article className={styles['listing-card']}>
      <span className={styles['listing-card__price']}>
        {convertNumberToCurrency(listing.latest_price_eur)}
      </span>
      <ul className={styles['listing-card__properties']}>
        <li className={styles['listing-card__properties-item']}>
          {capitalizeFirstLetter(listing.building_type)}
        </li>
        <li className={styles['listing-card__properties-item']}>
          {`${listing.surface_area_m2}m`}
          <sup>2</sup>
        </li>
        <li className={styles['listing-card__properties-item']}>{`${
          listing.bedrooms_count
        } ${listing.bedrooms_count === 1 ? 'room' : 'rooms'}`}</li>
      </ul>
      <section className={styles['listing-card__address']}>
        <address>
          {resolveAddressString({ postal_address: listing.postal_address })}
        </address>
      </section>
      <section className={styles['listing-card__description']}>
        <h3>Property description: </h3>
        <p>
          {listing.description
            ? listing.description
            : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          commodo, arcu eu varius dapibus, lacus velit posuere tellus, nec
          convallis sem velit ut leo. Maecenas maximus volutpat felis.`}
        </p>
      </section>
      <div className={styles['listing-card__footer']}>
        <p className={styles['listing-card__reference']}>
          Ref: {listing.ref ? listing.ref : '123456'} <br />
          Last update: {resolveDateString(listing.updated_date)}
        </p>
        <a href="/" className={styles['listing-card__link']}>
          See history &rarr;
        </a>
      </div>
    </article>
  );
};

export default ListingCard;
