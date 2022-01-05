import { useCallback, useState } from 'react';
import Card from '../../components/Card';
import { Manga } from '../../services/requests/types';
import useFetchTopMangas from '../../services/requests/useFetchTopMangas';
import { useUserPreferences } from '../../store/useUserPreferences';
import * as S from './styles';

export default function Home() {
  const [showFavorites, setShowFavorites] = useState(false);
  const { data } = useFetchTopMangas();
  const { toggleTheme } = useUserPreferences();

  const renderManga = useCallback(
    (manga: Manga) => (
      <Card
        key={`Home-Manga-${manga.mal_id}`}
        manga={manga}
        showFavorites={showFavorites}
      />
    ),
    [showFavorites]
  );

  const handleShowFavorite = useCallback(() => {
    setShowFavorites((oldShowFavorites) => !oldShowFavorites);
  }, []);

  return (
    <S.Container>
      <S.Button onClick={handleShowFavorite}>
        Show {showFavorites ? 'All' : 'Favorites'}
      </S.Button>
      <S.Button onClick={toggleTheme}>Toggle theme</S.Button>
      <S.MangasList>
        {data?.top.map((manga) => renderManga(manga))}
      </S.MangasList>
    </S.Container>
  );
}
