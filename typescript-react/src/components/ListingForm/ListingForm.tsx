import styles from './listing-form.module.scss';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Listing } from '@/types';
import axios from 'axios';
import { FieldApi, useForm } from '@tanstack/react-form';
import { useMemo } from 'react';
import { removeFalsyProperties } from '@/resolvers';

function FieldInfo({ field }: { field: FieldApi<any, any> }) {
  return (
    <>
      {field.state.meta.touchedError ? (
        <em style={{ color: 'red' }}>{field.state.meta.touchedError}</em>
      ) : null}{' '}
      {field.state.meta.isValidating ? 'Validating...' : null}
    </>
  );
}

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

const ListingForm = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    async (
      listing: Omit<Listing, 'id' | 'updated_date'> & {
        name: string;
        rooms_count: number;
        contact_phone_number: string;
      },
    ) => {
      axios.post('http://localhost:8080/listings', listing);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['listings'] });
      },
    },
  );

  const form = useForm({
    defaultValidateOn: 'blur',
    defaultValues: useMemo(() => {
      return standardFields;
    }, []),
    onSubmit: async (values) => {
      const filteredValues = removeFalsyProperties(values);
      mutation.mutate({
        ...filteredValues,
        latest_price_eur: Number(values.latest_price_eur),
        surface_area_m2: Number(values.surface_area_m2),
        bedrooms_count: Number(values.bedrooms_count),
        rooms_count: Number(values.rooms_count),
      });
    },
  });

  return (
    <form.Provider>
      <form {...form.getFormProps()} className={styles['listing-form']}>
        <div className={styles['listing-form__card']}>
          <form.Field
            name="name"
            validate={(value) => !value && 'This field is required'}
            children={(field) => {
              return (
                <>
                  <label htmlFor="name">Name:</label>
                  <input
                    {...field.getInputProps()}
                    type="text"
                    className={styles['listing-form__input-text']}
                  />
                  <FieldInfo field={field} />
                </>
              );
            }}
          />
          <form.Field
            name="latest_price_eur"
            validate={(value) => !value && 'This field is required'}
            children={(field) => {
              return (
                <>
                  <label htmlFor="latest_price_eur">Price:</label>
                  <input
                    {...field.getInputProps()}
                    type="number"
                    className={styles['listing-form__input-text']}
                  />
                  <FieldInfo field={field} />
                </>
              );
            }}
          />
          <form.Field
            name="bedrooms_count"
            validate={(value) => !value && 'This field is required'}
            children={(field) => {
              return (
                <>
                  <label htmlFor="bedrooms_count">Bedrooms:</label>
                  <input
                    {...field.getInputProps()}
                    type="number"
                    className={styles['listing-form__input-text']}
                  />
                  <FieldInfo field={field} />
                </>
              );
            }}
          />
          <form.Field
            name="rooms_count"
            validate={(value) => !value && 'This field is required'}
            children={(field) => {
              return (
                <>
                  <label htmlFor="rooms_count">Rooms:</label>
                  <input
                    {...field.getInputProps()}
                    type="number"
                    className={styles['listing-form__input-text']}
                  />
                  <FieldInfo field={field} />
                </>
              );
            }}
          />
          <form.Field
            name="surface_area_m2"
            validate={(value) => !value && 'This field is required'}
            children={(field) => {
              return (
                <>
                  <label htmlFor="surface_area_m2">Area:</label>
                  <input
                    {...field.getInputProps()}
                    type="number"
                    className={styles['listing-form__input-text']}
                  />
                  <FieldInfo field={field} />
                </>
              );
            }}
          />
          <form.Field
            name="postal_address.street_address"
            validate={(value) => !value && 'This field is required'}
            children={(field) => {
              return (
                <>
                  <label htmlFor="postal_address.street_address">
                    Street address:
                  </label>
                  <input
                    {...field.getInputProps()}
                    type="text"
                    className={styles['listing-form__input-text']}
                  />
                  <FieldInfo field={field} />
                </>
              );
            }}
          />
          <form.Field
            name="postal_address.postal_code"
            validate={(value) => !value && 'This field is required'}
            children={(field) => {
              return (
                <>
                  <label htmlFor="postal_address.postal_code">
                    Postal code:
                  </label>
                  <input
                    {...field.getInputProps()}
                    type="text"
                    className={styles['listing-form__input-text']}
                  />
                  <FieldInfo field={field} />
                </>
              );
            }}
          />
          <form.Field
            name="postal_address.city"
            validate={(value) => !value && 'This field is required'}
            children={(field) => {
              return (
                <>
                  <label htmlFor="postal_address.city">City:</label>
                  <input
                    {...field.getInputProps()}
                    type="text"
                    className={styles['listing-form__input-text']}
                  />
                  <FieldInfo field={field} />
                </>
              );
            }}
          />

          <form.Field
            name="postal_address.country"
            validate={(value) => !value && 'This field is required'}
            children={(field) => {
              return (
                <>
                  <label htmlFor="postal_address.country">Country:</label>
                  <input
                    {...field.getInputProps()}
                    type="text"
                    className={styles['listing-form__input-text']}
                  />
                </>
              );
            }}
          />
          <form.Field
            name="description"
            validate={(value) => !value && 'This field is required'}
            children={(field) => {
              return (
                <>
                  <label htmlFor="description">Description:</label>
                  <textarea
                    {...field.getInputProps()}
                    className={styles['listing-form__input-text']}
                  />
                  <FieldInfo field={field} />
                </>
              );
            }}
          />
          <form.Field
            name="contact_phone_number"
            children={(field) => {
              return (
                <>
                  <label htmlFor="contact_phone_number">Contact number:</label>
                  <input
                    {...field.getInputProps()}
                    type="text"
                    className={styles['listing-form__input-text']}
                  />
                </>
              );
            }}
          />
          <form.Field
            name="building_type"
            children={(field) => {
              return (
                <div className={styles['listing-form__input-group']}>
                  <label htmlFor="building_type">Building type:</label>
                  <select
                    {...field.getInputProps()}
                    name="building_type"
                    className={styles['listing-form__select']}
                  >
                    <option value="STUDIO">Studio</option>
                    <option value="APARTMENT">Apartment</option>
                    <option value="HOUSE">House</option>
                  </select>
                  <FieldInfo field={field} />
                </div>
              );
            }}
          />

          <button
            type="submit"
            className={styles['listing-form__button--submit']}
          >
            {mutation.status === 'loading' ? 'Loading...' : 'Create'}
          </button>
        </div>
      </form>
    </form.Provider>
  );
};

export default ListingForm;
