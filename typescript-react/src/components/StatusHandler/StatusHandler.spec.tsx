import { StatusHandler } from '@components/StatusHandler/StatusHandler';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';

describe('<StatusHandler />', () => {
  const { getByText } = screen;
  it('Should render error', () => {
    render(<StatusHandler status={'error'} />);
    expect(
      getByText(
        'Something went wrong, please reload the page or contact support.',
      ),
    ).toBeInTheDocument();
  });

  it('Should render loading', () => {
    render(<StatusHandler status={'loading'} />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});
