import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <Head>
      <meta charSet="utf-8"/>
      <meta name="description" content="Personal website of Sam Macaluso"/>
      <meta name="author" content="oonis"/>
      <meta name="keywords" content="personal website, oonis"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <meta name="theme-color" content="#000000"/>
  </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
