import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import styles from './listing-form.module.scss';

import { PostListing } from '@/types';

const standardFields = {
  name: '',
  latest_price_eur: '',
  surface_area_m2: '',
  bedrooms_count: '',
  rooms_count: '',
  postal_address: {
    street_address: '',
    postal_code: '',
    city: '',
    country: '',
  },
  description: '',
  building_type: 'STUDIO',
  contact_phone_number: '',
};

const schema = yup.object({
  name: yup.string().required('Name is required'),
  latest_price_eur: yup.string().required('Price is required'),
  surface_area_m2: yup.string().required('Area is required'),
  bedrooms_count: yup.string().required('Bedrooms is required'),
  rooms_count: yup.string().required('Rooms is required'),
  postal_address: yup.object({
    street_address: yup.string().required('Street address is required'),
    postal_code: yup.string().required('Postal code is required'),
    city: yup.string().required('City is required'),
    country: yup.string().required('Country is required'),
  }),
  description: yup.string().required('Description is required'),
  building_type: yup.string().required('Building type is required'),
  contact_phone_number: yup.string(),
});

const ListingForm = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    async (listing: PostListing) => {
      axios.post('http://localhost:8080/listings', listing);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['listings'] });
      },
    },
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: standardFields,
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: typeof standardFields) => {
    mutation.mutate({
      ...data,
      latest_price_eur: Number(data.latest_price_eur),
      surface_area_m2: Number(data.surface_area_m2),
      bedrooms_count: Number(data.bedrooms_count),
      rooms_count: Number(data.rooms_count),
    });
    reset();
  };

  return (
    <form className={styles['listing-form']} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles['listing-form__card']}>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <label htmlFor="name">Name:</label>
              <input
                {...field}
                type="text"
                className={styles['listing-form__input-text']}
              />

              <span role="alert" style={{ color: 'red' }}>
                {errors.name?.message}
              </span>
            </>
          )}
        />
        <Controller
          name="latest_price_eur"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <label htmlFor="latest_price_eur">Price:</label>
              <input
                {...field}
                type="number"
                className={styles['listing-form__input-text']}
              />

              <span role="alert" style={{ color: 'red' }}>
                {errors.latest_price_eur?.message}
              </span>
            </>
          )}
        />
        <Controller
          name="surface_area_m2"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <label htmlFor="surface_area_m2">Area:</label>
              <input
                {...field}
                type="number"
                className={styles['listing-form__input-text']}
              />

              <span role="alert" style={{ color: 'red' }}>
                {errors.surface_area_m2?.message}
              </span>
            </>
          )}
        />
        <Controller
          name="bedrooms_count"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <label htmlFor="bedrooms_count">Bedrooms:</label>
              <input
                {...field}
                type="number"
                className={styles['listing-form__input-text']}
              />

              <span role="alert" style={{ color: 'red' }}>
                {errors.bedrooms_count?.message}
              </span>
            </>
          )}
        />
        <Controller
          name="rooms_count"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <label htmlFor="rooms_count">Rooms:</label>
              <input
                {...field}
                type="number"
                className={styles['listing-form__input-text']}
              />

              <span role="alert" style={{ color: 'red' }}>
                {errors.rooms_count?.message}
              </span>
            </>
          )}
        />
        <Controller
          name="postal_address.street_address"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <label htmlFor="postal_address.street_address">
                Street address:
              </label>
              <input
                {...field}
                type="text"
                className={styles['listing-form__input-text']}
              />

              <span role="alert" style={{ color: 'red' }}>
                {errors.postal_address?.street_address?.message}
              </span>
            </>
          )}
        />
        <Controller
          name="postal_address.postal_code"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <label htmlFor="postal_address.postal_code">Postal code:</label>
              <input
                {...field}
                type="text"
                className={styles['listing-form__input-text']}
              />

              <span role="alert" style={{ color: 'red' }}>
                {errors.postal_address?.postal_code?.message}
              </span>
            </>
          )}
        />
        <Controller
          name="postal_address.city"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <label htmlFor="postal_address.city">City:</label>
              <input
                {...field}
                type="text"
                className={styles['listing-form__input-text']}
              />

              <span role="alert" style={{ color: 'red' }}>
                {errors.postal_address?.city?.message}
              </span>
            </>
          )}
        />
        <Controller
          name="postal_address.country"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <label htmlFor="postal_address.country">Country:</label>
              <input
                {...field}
                type="text"
                className={styles['listing-form__input-text']}
              />

              <span role="alert" style={{ color: 'red' }}>
                {errors.postal_address?.country?.message}
              </span>
            </>
          )}
        />
        <Controller
          name="description"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <label htmlFor="description">Description:</label>
              <textarea
                {...field}
                className={styles['listing-form__input-text']}
              />
              <span role="alert" style={{ color: 'red' }}>
                {errors.name?.message}
              </span>
            </>
          )}
        />
        <Controller
          name="contact_phone_number"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <label htmlFor="contact_phone_number">Phone number:</label>
              <input
                {...field}
                type="text"
                className={styles['listing-form__input-text']}
              />

              <span role="alert" style={{ color: 'red' }}>
                {errors.contact_phone_number?.message}
              </span>
            </>
          )}
        />
        <Controller
          name="building_type"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <div className={styles['listing-form__input-group']}>
              <label htmlFor="building_type">Building type:</label>
              <select
                {...field}
                name="building_type"
                className={styles['listing-form__select']}
              >
                <option value="STUDIO">Studio</option>
                <option value="APARTMENT">Apartment</option>
                <option value="HOUSE">House</option>
              </select>
            </div>
          )}
        />
        <button
          type="submit"
          className={styles['listing-form__button--submit']}
        >
          {mutation.status === 'loading' ? 'Loading...' : 'Create'}
        </button>
      </div>
    </form>
  );
};

export default ListingForm;
