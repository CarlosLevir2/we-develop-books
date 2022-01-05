import { useUserPreferences } from '../store/useUserPreferences';
import theme from '../styles/theme';

export default function useTheme() {
  const { themeName } = useUserPreferences();

  return {
    theme: theme[themeName],
  };
}
