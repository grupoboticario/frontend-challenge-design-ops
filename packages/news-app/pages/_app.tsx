import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { Menu } from '@components/template';
import { Container } from '@components/atoms';
import {
  injectGlobalStyles, themeUS, themeBR, themePT,
} from '@utils/stitches';

import '@design-ops/design-system/dist/br/index.css';
import '@design-ops/design-system/dist/pt/index.css';
import '@design-ops/design-system/dist/us/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  injectGlobalStyles();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="pt-BR"
      storageKey="theme"
      value={{
        'en-US': themeUS.className,
        'pt-BR': themeBR.className,
        'pt-PT': themePT.className,
      }}
    >
      {typeof window !== 'undefined' && (<Menu currentPath={window?.location.pathname} />)}
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>

  );
}

export default MyApp;
