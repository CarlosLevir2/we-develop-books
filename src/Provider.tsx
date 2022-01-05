import { QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import useTheme from './hooks/theme';
import queryClient from './services/queryClient';

type Props = {
  children: React.ReactNode;
};

export default function Provider({ children }: Props) {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}
