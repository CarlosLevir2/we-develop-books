import { render, screen, waitFor } from '@testing-library/react';
import nock from 'nock';
import Home from '../../../pages/Home';
import Provider from '../../../Provider';
import { API_BASE_URL } from '../../../services/api';
import { mangasMock } from '../../__mocks__/mangas';

nock(API_BASE_URL)
  .persist()
  .defaultReplyHeaders({
    'access-control-allow-origin': '*',
  })
  .get('/top/manga')
  .reply(200, mangasMock);

test('renders home page', () => {
  render(
    <Provider>
      <Home />
    </Provider>
  );
  const linkElement = screen.getByText(/Show Favorites/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders mangas successfully', async () => {
  render(
    <Provider>
      <Home />
    </Provider>
  );

  const firstMangaTitle = mangasMock.top[0].title;

  await waitFor(() => {
    const linkElement = screen.getByText(firstMangaTitle);
    expect(linkElement).toBeInTheDocument();
  });
});

test('match snapshot', () => {
  const { container } = render(
    <Provider>
      <Home />
    </Provider>
  );
  expect(container).toMatchSnapshot();
});
