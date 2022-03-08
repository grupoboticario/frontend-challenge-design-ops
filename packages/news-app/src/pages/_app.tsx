import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { SWRConfig } from 'swr'
import { i18n, I18nextProvider } from '~/i18n'
import { fetcherWithToken } from '~/services/fetcher'
import { brTheme, globalStyles, ptTheme, usTheme } from '~/styles/stitches.config'

export default function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <SWRConfig
        value={{
          refreshInterval: 90000,
          revalidateIfStale: false,
          revalidateOnFocus: false,
          fetcher: fetcherWithToken,
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="en-US"
          value={{
            'en-US': usTheme.className,
            'pt-BR': brTheme.className,
            'pt-PT': ptTheme.className,
          }}
        >
          <I18nextProvider i18n={i18n}>
            <Component {...pageProps} />
          </I18nextProvider>
        </ThemeProvider>
      </SWRConfig>
    </>
  )
}
