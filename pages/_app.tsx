import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  const styles = {
    global: {
      body: {
        fontFamily: 'Lato, sans-serif',
      },
    },
  };

  const theme = extendTheme({ styles });

  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
