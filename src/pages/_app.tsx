import 'styles/index.css'
import Head from 'next/head'
import { Layout } from 'components'
import Router from 'next/router'

if (process.env.NODE_ENV === 'production') {
  Router.events.on('routeChangeComplete', (url) => {
    ;(window as any).ga('send', 'pageview', url)
  })
}

export default function StaticDevApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Static Dev</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        {process.env.NODE_ENV === 'production' ? (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
            window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
            ga('create', '${process.env.NEXT_PUBLIC_GA_ID}', 'auto');
            ga('send', 'pageview', location.pathname);
          `,
              }}
            />
            <script
              async
              src="https://www.google-analytics.com/analytics.js"
            ></script>
          </>
        ) : null}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export function reportWebVitals({ id, name, label, value }) {
  if (process.env.NODE_ENV === 'production') {
    ;(window as any).ga('send', 'event', {
      eventCategory: `Next.js ${label} metric`,
      eventAction: name,
      eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
      eventLabel: id, // id unique to current page load
      nonInteraction: true, // avoids affecting bounce rate.
    })
  }
}
