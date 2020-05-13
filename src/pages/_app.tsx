import 'styles/index.css'
import Head from 'next/head'
import { Layout } from 'components'

export default function StaticDevApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Static Dev</title>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
