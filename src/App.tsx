import { SkeletonTheme } from 'react-loading-skeleton';
import Provider from './Provider';
import AppRoutes from './routes';
import { useUserPreferences } from './store/useUserPreferences';
import GlobalStyles from './styles/global';

function App() {
  const { theme } = useUserPreferences();

  return (
    <Provider>
      <SkeletonTheme highlightColor={theme.colors.accent.soft}>
        <GlobalStyles />
        <AppRoutes />
      </SkeletonTheme>
    </Provider>
  );
}

export default App;
