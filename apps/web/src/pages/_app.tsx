import '../globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Todo App - With Turborepo</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Todo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
