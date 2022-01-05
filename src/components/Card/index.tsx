import { useCallback, useMemo, useState } from 'react';
import useTheme from '../../hooks/theme';
import { Manga } from '../../services/requests/types';
import { useFavoriteMangas } from '../../store/useFavoriteMangas';

import * as S from './styles';

type Props = {
  manga: Manga;
  showFavorites?: boolean;
};

const Card = ({ manga, showFavorites = false }: Props) => {
  const [showDescription, setShowDescription] = useState(false);
  const { favorites } = useFavoriteMangas();
  const { theme } = useTheme();

  const isFavorite = useMemo(
    () => favorites?.includes(manga.mal_id),
    [favorites, manga.mal_id]
  );

  const toggleFavoriteManga = useCallback(() => {
    const shouldRemove = favorites?.includes(manga.mal_id);

    const newFavorites = shouldRemove
      ? favorites?.filter((favorite) => favorite !== manga.mal_id)
      : [...(favorites || []), manga.mal_id];

    useFavoriteMangas.setState({ favorites: newFavorites });
  }, [favorites, manga.mal_id]);

  const toggleDescription = useCallback(() => {
    setShowDescription((oldShowDescription) => !oldShowDescription);
  }, []);

  if (showFavorites && !isFavorite) {
    return null;
  }

  return (
    <S.Card>
      <S.CardImage src={manga.image_url} alt={manga.title} />
      <S.Information>
        <S.Star
          size={28}
          color={theme.colors.stars[isFavorite ? 'fill' : 'empty']}
          onClick={toggleFavoriteManga}
        />
        <S.CardTitle>{manga.title}</S.CardTitle>

        <div>
          <S.ShowDescriptionButton onClick={toggleDescription}>
            Show Description
          </S.ShowDescriptionButton>
          {showDescription && <S.Description>{manga.url}</S.Description>}
        </div>
      </S.Information>
    </S.Card>
  );
};
export default Card;
