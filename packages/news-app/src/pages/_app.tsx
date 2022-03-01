import type { AppProps } from 'next/app'
import { i18n, I18nextProvider } from '~/i18n'
import { globalStyles } from '~/styles/stitches.config'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  )
}

export default MyApp
