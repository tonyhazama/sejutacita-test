import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppContextProvider } from '../context/app-context-provider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="root">
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </div>
  )
}

export default MyApp
