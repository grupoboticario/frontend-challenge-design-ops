import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { SWRConfig } from 'swr'
import { i18n, I18nextProvider } from '~/i18n'
import { fetcherWithToken } from '~/services'
import { brTheme, globalStyles, ptTheme, usTheme } from '~/styles/stitches.config'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <SWRConfig
      value={{
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
  )
}

export default MyApp
