import 'styles/index.css'
import 'material-components-web/dist/material-components-web.min.css'
import Head from 'next/head'
import { Layout } from 'components'

import { ThemeProvider } from 'rmwc'

//https://material.io/design/color/the-color-system.html#tools-for-picking-colors

export default function StaticDevApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Static Dev</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Cantarell:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <ThemeProvider
        options={{
          primary: 'red',
          secondary: 'blue',
          background: '#90A4AE',
          surface: '#ECEFF1',
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
