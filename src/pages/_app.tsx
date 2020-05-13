import 'styles/index.css'
import Head from 'next/head'
import { Layout } from 'components'
import Router from 'next/router'

Router.events.on('routeChangeComplete', (url) =>
  (window as any).ga('send', 'pageview')
)

export default function StaticDevApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Static Dev</title>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
            ga('create', '${process.env.NEXT_PUBLIC_GA_ID}', 'auto');
            ga('send', 'pageview');
          `,
          }}
        />
        <script
          async
          src="https://www.google-analytics.com/analytics.js"
        ></script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
