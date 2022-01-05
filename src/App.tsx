import { SkeletonTheme } from 'react-loading-skeleton';
import Provider from './Provider';
import AppRoutes from './routes';
import { useUserPreferences } from './store/useUserPreferences';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

function App() {
  const { themeName } = useUserPreferences();

  return (
    <Provider>
      <SkeletonTheme highlightColor={theme[themeName].colors.accent.soft}>
        <GlobalStyles />
        <AppRoutes />
      </SkeletonTheme>
    </Provider>
  );
}

export default App;
