import {
  capitalizeFirstLetter,
  convertNumberToCurrency,
  resolveAddressString,
  resolveDateString,
} from '@/resolvers';

describe('convertNumberToCurrency', () => {
  it('should convert number to currency', () => {
    expect(convertNumberToCurrency(123)).toBe('123 €');
    expect(convertNumberToCurrency(123000)).toBe('123.000 €');
  });
});

describe('capitalizeFirstLetter', () => {
  it('should capitalize first letter', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
    expect(capitalizeFirstLetter('hello world')).toBe('Hello world');
    expect(capitalizeFirstLetter('STUDIO')).toBe('Studio');
  });
});

describe('resolveAddressString', () => {
  it('should resolve address string', () => {
    const address = {
      postal_address: {
        street_address: '48, boulevard des capucins',
        postal_code: '10294',
        city: 'Paris',
        country: 'France',
      },
    };
    expect(resolveAddressString(address)).toBe(
      '48, boulevard des capucins, 10294, Paris',
    );
  });
});

describe('resolveDateString', () => {
  it('should resolve date string', () => {
    const date = '2022-11-17';
    expect(resolveDateString(date)).toBe('17.11.2022');
  });
});
