import { render, screen } from '@testing-library/react';
import Card from '../../../components/Card';
import Provider from '../../../Provider';
import { mangasMock } from '../../__mocks__/mangas';

const firstManga = mangasMock.top[0];

test('renders card component', () => {
  render(
    <Provider>
      <Card manga={firstManga} />
    </Provider>
  );
  const linkElement = screen.getByText(firstManga.title);
  expect(linkElement).toBeInTheDocument();
});

test('match snapshot', () => {
  const { container } = render(
    <Provider>
      <Card manga={firstManga} />
    </Provider>
  );
  expect(container).toMatchSnapshot();
});
