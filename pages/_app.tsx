import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/events.scss'
import '../styles/contact.scss'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
