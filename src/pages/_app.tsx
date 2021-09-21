import { AppProps } from 'next/dist/shared/lib/router/router'
import '../styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
