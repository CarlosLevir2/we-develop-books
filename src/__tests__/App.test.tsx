import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders login page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});

test('match snapshot', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
