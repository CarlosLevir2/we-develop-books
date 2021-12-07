import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../../../pages/Login';
import Provider from '../../../Provider';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

test('renders login page', () => {
  render(
    <Provider>
      <Login />
    </Provider>
  );
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});

test('match snapshot', () => {
  const { container } = render(
    <Provider>
      <Login />
    </Provider>
  );
  expect(container).toMatchSnapshot();
});

test('push to home when login is clicked', async () => {
  render(
    <Provider>
      <Login />
    </Provider>
  );

  const linkElement = screen.getByText(/Login/i);
  userEvent.click(linkElement);

  expect(mockNavigate).toHaveBeenCalled();
});
