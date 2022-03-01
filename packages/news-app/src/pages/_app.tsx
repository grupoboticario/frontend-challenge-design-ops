import type { AppProps } from 'next/app'
import { globalStyles } from '~/styles/stitches.config'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return <Component {...pageProps} />
}

export default MyApp
