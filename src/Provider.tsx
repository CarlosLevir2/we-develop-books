import { QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import queryClient from './services/queryClient';
import { useUserPreferences } from './store/useUserPreferences';

type Props = {
  children: React.ReactNode;
};

export default function Provider({ children }: Props) {
  const { theme } = useUserPreferences();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}
