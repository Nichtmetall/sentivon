import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="4e85f4b0-2011-4b84-84ad-eab92d1e9bab" data-blockingmode="auto" type="text/javascript"></script>
      </Head>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
        <script id="CookieDeclaration" src="https://consent.cookiebot.com/4e85f4b0-2011-4b84-84ad-eab92d1e9bab/cd.js" type="text/javascript" async></script>
      </ThemeProvider>
    </>
  )

}
