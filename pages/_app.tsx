'use client';
import './globals.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import type { AppProps } from 'next/app';
import ReduxProvider from '@/store/reduxProvider';
import ErrorBoundary from '@/components/ErrorBoundary';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ReduxProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ReduxProvider>
    </ErrorBoundary>
  );
}

export default MyApp;
