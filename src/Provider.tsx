import { QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import queryClient from './services/queryClient';
import { theme } from './styles/theme';

type Props = {
  children: React.ReactNode;
};

export default function Provider({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}
