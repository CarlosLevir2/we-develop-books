import { SkeletonTheme } from 'react-loading-skeleton';
import Provider from './Provider';
import AppRoutes from './routes';
import GlobalStyles from './styles/global';
import { theme } from './styles/theme';

function App() {
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
