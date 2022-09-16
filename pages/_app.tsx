import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { dark, light } from '@/styles/themes';
import GlobalStyle from '@/styles/global';
import { AuthProvider } from '@/contexts/AuthContext';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme] = useState('dark');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <AuthProvider>
      {!loading && (
        <ThemeProvider theme={theme === 'dark' ? dark : light}>
          <Component {...pageProps} />
          <GlobalStyle />
          <ToastContainer theme="colored" />
        </ThemeProvider>
      )}
    </AuthProvider>
  );
}

export default MyApp;
